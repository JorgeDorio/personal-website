import { useTheme } from "next-themes";
import Link from "next/link";

export type cardProps = {
  name: string;
  description: string;
  href: string;
  tags: tags;
};

type tags = ["NODE" | ".NET", "FRONTEND" | "BACKEND" | "FULLSTACK"];

export default function ProjectCard({
  name,
  description,
  href,
  tags,
}: cardProps) {
  const { theme } = useTheme();

  function getContrast() {
    return theme == "dark" ? "white" : "black";
  }

  function GetLinkClass() {
    return `p-4 border rounded-lg border-${
      theme == "dark" ? "white" : "black"
    }`;
  }

  return (
    <Link href={href} className={GetLinkClass()}>
      <div className="flex flex-row justify-between">
        <h1 className="text-xl font-semibold mb-2">{name}</h1>
        <div>
          {tags.map((tag, i) => (
            <span
              key={i}
              className={
                "rounded-full border text-xs py-0.5 px-2 font-bold ml-2"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p>{description}</p>
    </Link>
  );
}
