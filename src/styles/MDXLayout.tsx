import { MDXProvider as Provider } from "@mdx-js/react";
import { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from "react";
import { MDXComponents } from "mdx/types";

type props = {
  children: ReactNode;
};

const components: MDXComponents = {
  h1: (props: any) => <h1 className="text-xl font-bold mb-9" {...props} />,
};

export default function MDXProvider({ children }: props) {
  return (
    <article className="block">
      <Provider components={components}>{children}</Provider>
    </article>
  );
}
