import ButtonLink from "@/src/components/ButtonLink";

export default function RenderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-row space-x-2 justify-center">
        <ButtonLink href="/params/single/myInput">Single Param</ButtonLink>
        <ButtonLink href="/params/nestedParams/my/complex/input">Nested Params</ButtonLink>
        <ButtonLink href="/params/search?a=1&b=2">Search Params</ButtonLink>
      </div>
      {children}
    </div>
  );
}
