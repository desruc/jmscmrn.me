import { projects } from "~/constants/projects";
import { socials } from "~/constants/socials";

export function MyspaceNavigation() {
  return (
    <nav className="container mx-auto bg__darkblue myspace-navigation">
      <div className="h-[125px] text-white p-2">
        <div className="flex justify-between flex-wrap">
          <div>
            <a href="https://jmscmrn.me">Jmscmrn.me</a> |{" "}
            <a href={socials.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div>
            <label htmlFor="jmscmrn" className="mr-2">
              Jmscmrn.me
            </label>
            <input
              type="radio"
              id="jmscmrn"
              name="jmscmrn"
              value="jmscmrn"
              checked
              className="mr-2"
            />
            <label htmlFor="web" className="mr-2">
              The web
            </label>
            <input
              type="radio"
              id="web"
              name="web"
              value="web"
              className="mr-2"
            />
            <input type="text" className="text-black mr-2" />
            <button className="bg-[#E0FFFF] border-[#bababa] border-[1px] px-2 text-black">
              Search
            </button>
          </div>
          <div>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="bg__lightblue">
        <ul className="flex justify-between p-1 flex-wrap">
          {projects.map((project, idx) => {
            const baseClassName = "flex justify-center items-center grow";

            const listItemClassName =
              idx === projects.length - 1
                ? baseClassName
                : `${baseClassName} border-r-[1px] border-black`;

            return (
              <li key={project.title} className={listItemClassName}>
                <a
                  href={project.href}
                  className="text-white hover:text-[#040C5C] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
