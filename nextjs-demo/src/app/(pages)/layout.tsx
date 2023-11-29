import ButtonLink from "@/src/components/ButtonLink";
import Link from "next/link";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="text-white p-4">
        <ul className="flex space-x-4 justify-center items-center">
          <Link href={"/"}>
            <li className="text-2xl mr-5 font-bold hover:text-lime-400 transition-all duration-300">Next.js Demo</li>
          </Link>
          <li>
            <ButtonLink href="/client">Client</ButtonLink>
          </li>
          <li>
            <ButtonLink href="/server">Server</ButtonLink>
          </li>
          <li>
            <ButtonLink href="/static">Static</ButtonLink>
          </li>
          <li>
            <ButtonLink href="/protected">Protected</ButtonLink>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
