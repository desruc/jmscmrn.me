import { ProjectTrail } from "~/components/ProjectTrail";

export default function Home() {
  return (
    <main className="py-24 px-8">
      <div className="container mx-auto">
        <section className="mb-24">
          <h1 className="mb-4 text-3xl lg:text-4xl">James Cameron</h1>
          <p>
            Hi, I{`'`}m James Cameron, a software engineer from Brisbane,
            Australia.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl lg:text-3xl">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProjectTrail />
          </div>
        </section>
      </div>
    </main>
  );
}
