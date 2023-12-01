import ButtonLink from "@/src/components/ButtonLink";

export default function RenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row space-x-2 justify-center">
        <ButtonLink href="/rendering/cient">Client</ButtonLink>
        <ButtonLink href="/rendering/static">Static</ButtonLink>
        <ButtonLink href="/rendering/server">Server</ButtonLink>
      </div>
      {children}
    </div>
  );
}
