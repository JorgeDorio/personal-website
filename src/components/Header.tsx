"use client";

import NextLink from "next/link";
import React, { ReactNode } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import HomeBtn from "./HomeBtn";
import IconTheme from "./IconTheme";

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
  function GetLinkClass() {
    return `font-bold p-2 tracking-widest ${
      theme == "dark" ? "bg-white text-black" : "bg-black text-white"
    }`;
  }

  const { theme, setTheme } = useTheme();

  return (
    <header className="flex flex-row justify-between m-9">
      <nav className="flex flex-row items-center gap-9">
        <HomeBtn />
        <Link href="/portfolio">PORTFOLIO</Link>
        {/* <Link href="/blog">BLOG</Link>
        <Link href="/about">ABOUT ME</Link> */}
      </nav>
      <button
        onClick={() => (theme == "dark" ? setTheme("ligth") : setTheme("dark"))}
      >
        <IconTheme />
      </button>
    </header>
  );
}
