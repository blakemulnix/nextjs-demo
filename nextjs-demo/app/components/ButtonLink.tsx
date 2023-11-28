import Link from "next/link";

const ButtonLink = ({ href, children }: any) => (
  <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300">
    <Link href={href}>
      {children}
    </Link>
  </button>
);

export default ButtonLink;
