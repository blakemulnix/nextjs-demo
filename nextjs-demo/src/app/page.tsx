import ButtonLink from "../components/ButtonLink";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 items-center text-center">
      <div className="text-3xl font-bold mb-8">Next.js Demo Site</div>
      <div className="text-xl font-bold mb-8 text-center">
        Welcome to this Next.js Demo Site!
      </div>

      <div className="text-xl font-bold mb-6">
        Check out the links below showing off various features!
      </div>
      <div className="flex space-x-4 mb-12">
        <ButtonLink href="/client">Client</ButtonLink>
        <ButtonLink href="/server">Server</ButtonLink>
        <ButtonLink href="/static">Static</ButtonLink>
        <ButtonLink href="/protected">Protected</ButtonLink>
        <ButtonLink href="/protected">API</ButtonLink>
      </div>

      <div className="text-xl font-bold mb-6">
        Here are the technologies this site leverages:
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-10 text-left w-full">
        <p>
          <strong>Next.js:</strong> A React framework that enables functionality
          like server-side rendering (SSR), static site generation (SSG), and
          API routes out of the box. It provides a great developer experience
          with features like automatic code splitting and hot module
          replacement.
        </p>
        <p>
          <strong>React:</strong> A JavaScript library for building user
          interfaces. React allows developers to create reusable UI components
          and efficiently update and render UI components based on changes in
          data.
        </p>
        <p>
          <strong>NextAuth:</strong> An authentication library for Next.js
          applications. It simplifies the implementation of authentication and
          authorization, providing features like social authentication, JWT, and
          session management.
        </p>
        <p>
          <strong>GitHub Pipeline:</strong> GitHub Actions allows you to
          automate your software development workflows. It can be used for
          continuous integration, continuous deployment, and other automation
          tasks.
        </p>
        
        <p>
          <strong>Azure App Service:</strong> A fully managed platform for
          building, deploying, and scaling web apps. It supports multiple
          programming languages and frameworks, providing a seamless experience
          for hosting and scaling applications.
        </p>
        <p>
          <strong>Tailwind CSS:</strong> A utility-first CSS framework that
          makes it easy to build modern and responsive user interfaces. Tailwind
          CSS provides a set of pre-designed, low-level utility classes that can
          be composed to create stylish and consistent designs.
        </p>
      </div>
    </main>
  );
}
