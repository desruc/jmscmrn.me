"use client";

import { a, useTrail } from "@react-spring/web";

import { projects } from "~/constants/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectTrail() {
  const trail = useTrail(projects.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    from: { opacity: 0 },
  });
  return trail.map(({ ...style }, index) => (
    <a.div key={index} style={style} className="h-full">
      <ProjectCard {...projects[index]} />
    </a.div>
  ));
}
