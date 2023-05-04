import SidebarLink, { sidebarProps } from "./SidebarLink";
import { useState } from "react";

export default function SidebarPortfolio() {
  const sideData: Array<sidebarProps> = [
    {
      title: "Frontend",
      projects: [{ name: "This website", slug: "my-personal-website" }],
      state: useState(false),
    },
  ];

  return (
    <>
      <aside className="w-56 h-screen">
        {sideData.map(({ projects, state, title }, i) => (
          <SidebarLink
            projects={projects}
            state={state}
            title={title}
            key={i}
          />
        ))}
      </aside>
    </>
  );
}
