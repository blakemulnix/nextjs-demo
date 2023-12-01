"use client";
import { Session } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data } = useSession();

  if (!data) {
    return (
      <div className="flex justify-end">
        <button
          className="shrink bg-black hover:bg-sky-400 hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    );
  }

  const session: Session = data;
  console.log(session);

  return (
    <div className="flex flex-row space-x-2 justify-end">
      <div className="shrink bg-black hover:bg-sky-400 hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300">{session.user?.name}</div>
      <button className={"shrink bg-black hover:bg-sky-400 hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300"}
      onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
