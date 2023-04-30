import NextLink from "next/link";
import React, { ReactNode } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";

type linkProps = {
  children: ReactNode;
  href: string;
};

function Link({ children, href }: linkProps) {
  return (
    <NextLink className="text-xs tracking-widest text-gray-400" href={href}>
      {children}
    </NextLink>
  );
}

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex flex-row justify-between">
      <nav className="flex flex-row items-center gap-9">
        <NextLink
          className={`font-bold p-2 tracking-widest ${
            theme == "dark" ? "bg-white text-black" : "bg-black text-white"
          }`}
          href="/"
        >
          DORIO
        </NextLink>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/blog">BLOG</Link>
        <Link href="/about">ABOUT ME</Link>
      </nav>
      <button
        onClick={() => (theme == "dark" ? setTheme("ligth") : setTheme("dark"))}
      >
        <FontAwesomeIcon
          icon={theme == "dark" ? faMoon : faSun}
          className="h-7"
        />
      </button>
    </header>
  );
}
