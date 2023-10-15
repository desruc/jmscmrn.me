import { getYearsSinceDate } from "~/utils/getYearsSinceDate";

export function BlurbsSection() {
  return (
    <section className="py-2">
      <h2 className="title__orange bg__orange px-2">{`James Cameron's Blurbs`}</h2>
      <div className="px-2">
        <div className="about-section">
          <h3 className="title__orange">About me</h3>
          <p>
            Hi! I{`'`}m James Cameron, a dedicated software engineer based in
            Brisbane, Australia.
          </p>
          <p>
            {" "}
            With {getYearsSinceDate(new Date("01-09-2018"))} years of experience
            in the industry, I specialize in developing robust software
            solutions that drive efficiency and performance. My expertise
            encompasses the full software development lifecycle, from
            architecting scalable systems to optimizing user experiences.
          </p>
          <p>
            {" "}
            I am committed to staying at the forefront of technology,
            continuously learning and adapting to new tools and methodologies. I
            thrive in collaborative environments, working closely with teams to
            deliver high-quality, reliable software solutions.
          </p>
          <p>
            {" "}
            Outside of coding, I enjoy exploring the latest advancements in the
            tech world, attending meetups, and contributing to the developer
            community. Let{`'`}s connect and discuss how my skills and
            experience can contribute to your next exciting project.
          </p>
        </div>
      </div>
    </section>
  );
}
