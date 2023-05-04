import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export type sidebarProps = {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  projects: Array<{ name: string; slug: string }>;
  title: string;
};

export default function SidebarLink({ projects, title, state }: sidebarProps) {
  const [selected, setSelected] = state;
  return (
    <div>
      <button
        className="text-lg font-semibold"
        onClick={() => setSelected(!selected)}
      >
        <FontAwesomeIcon
          icon={selected ? faAngleDown : faAngleRight}
          className="mr-2 h-4 w-4"
        />
        <span>{title}</span>
      </button>
      {selected && (
        <ul className="ml-6">
          {projects.map(({ name, slug }, i) => (
            <li key={i}>
              <Link href={`/portfolio/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
