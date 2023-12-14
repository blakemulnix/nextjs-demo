"use client";
import { useAccount, useIsAuthenticated, useMsal, useMsalAuthentication } from "@azure/msal-react";

export default function SignIn() {
  
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();
  const accountInfo = useAccount(accounts[0] || {});
  const name = accountInfo?.name;
  

  if (!isAuthenticated) {
    return (
      <div className="flex justify-end">
        <button
          className="shrink bg-black hover:bg-sky-400 hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300"
          onClick={() => instance.loginRedirect()}
        >
          Sign In
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-row space-x-2 justify-end">
      <div className="shrink bg-black hover:bg-sky-400 hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300">{name}</div>
      <button className={"shrink bg-black hover:bg-sky-400 hover:text-black text-white font-bold py-2 px-4 rounded border border-white transition-all duration-300"}
      onClick={() => instance.logoutRedirect({account: accounts[0]})}>Sign Out</button>
    </div>
  );
}
