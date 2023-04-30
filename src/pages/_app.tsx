import Header from "@/components/Header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

type props = {
  Component: new () => React.Component<any, any>;
  pageProps: any;
};

export default function MyApp({ Component, pageProps }: props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="m-9">
        <Header />
        <Component className={inter.className} {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
