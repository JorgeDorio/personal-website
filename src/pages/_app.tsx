import Header from "@/components/Header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import { MainProvider } from "@/context";

import MDXProvider from "@/styles/MDXLayout";
import { Router, useRouter } from "next/router";
import SidebarPortfolio from "@/components/SidebarPortfolio";

const inter = Inter({ subsets: ["latin"] });

type props = {
  Component: new () => React.Component<any, any>;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: props) {
  const isPortfolio = useRouter().asPath.includes("portfolio");

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <MainProvider>
        <div>
          <style jsx global>{`
            html {
              font-family: ${inter.style.fontFamily};
            }
          `}</style>
          <Header />
          <div className="flex flex-row ml-9">
            {isPortfolio && <SidebarPortfolio />}
            <MDXProvider>
              <Component className={inter.className} {...pageProps} />
            </MDXProvider>
          </div>
          <Footer />
        </div>
      </MainProvider>
    </ThemeProvider>
  );
}
