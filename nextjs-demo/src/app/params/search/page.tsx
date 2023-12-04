"use client";

import { useSearchParams } from "next/navigation";

export default async function Page() {
  const searchParams = useSearchParams();

  let params: any = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <div className="text-3xl font-bold mb-8">Search Params</div>
      <div className="text-xl mb-8" suppressHydrationWarning>
        This page accepts query string search params
      </div>
      <div className="text mb-8" suppressHydrationWarning>
        Params: {JSON.stringify(params)}
      </div>
    </main>
  );
}
