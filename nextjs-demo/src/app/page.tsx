import ButtonLink from "../components/ButtonLink";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 items-center text-center">
      <div className="text-3xl font-bold mb-8">Next.js Demo Site</div>
      <div className="text-xl font-bold mb-8 text-center">
        Follow the links below to checkout pages showing off various 
        rendering methods as well as authentication/authorization.
      </div>
      <div className="flex space-x-4">
        <ButtonLink href="/client">Client Page</ButtonLink>
        <ButtonLink href="/protected">Protected Page</ButtonLink>
        <ButtonLink href="/server">Server Page</ButtonLink>
        <ButtonLink href="/static">Static Page</ButtonLink>
      </div>
    </main>
  );
}
