import ProjectCard, { cardProps } from "@/components/ProjectCard";
import SidebarPortfolio from "@/components/SidebarPortfolio";

const favorites: Array<cardProps> = [
  {
    name: "Recipe App",
    description: "A frontend to a recipe app",
    href: "/portfolio/recipe-app",
    tags: ["NODE", "FRONTEND"],
  },
  {
    name: "Delivery App",
    description: "A fullstack and simple delivery app simulatio",
    href: "/portfolio/delivery-app",
    tags: ["NODE", "FULLSTACK"],
  },
  {
    name: "Movie API",
    description: "A backend of a cinema system",
    href: "/portfolio/movie-api",
    tags: [".NET", "BACKEND"],
  },
  {
    name: "This website",
    description: "My personal website",
    href: "/",
    tags: [".NET", "FRONTEND"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="flex flex-row m-9">
      <article>
        <h1 className="text-xl font-bold mb-9">My projects</h1>
        <p className="mb-4">
          Here are my old projects. You can choose the language/enviroment in
          the side bar and read about the projects
        </p>
        <p>Check some of my favorites projects below.</p>
        <div className="mt-9 grid grid-cols-2 gap-4">
          {favorites.map(({ name, description, href, tags }, i) => (
            <ProjectCard
              key={i}
              tags={tags}
              href={href}
              name={name}
              description={description}
            />
          ))}
        </div>
      </article>
    </main>
  );
}
