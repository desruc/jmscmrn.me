import { type ProjectDetails } from "~/constants/projects";

type Props = ProjectDetails;

export function ProjectCard({ title, description, href }: Props) {
  return (
    <div className="h-full">
      <a href={href ?? "#"} target="_blank">
        <div className="rounded-md p-4 transition-colors bg-transparent hover:bg-card h-full">
          <h3 className="text-lg lg:text-xl font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}
