import LoadingText from "@/src/components/LoadingText";
import RepositoryTable from "@/src/components/RepositoryTable";
import getCurrentTime from "@/src/util/TimeUtils";
import React, { Suspense } from "react";

export const dynamic = 'force-dynamic';

export default async function Page() {
  const currentTime = getCurrentTime();

  const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));
  await sleep(5000);

  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <div className="text-3xl font-bold mb-8">Server-side Rendered Page</div>
      <div className="text-xl mb-8">
        This page is rendered on the server for each request. This page was
        rendered at {currentTime}.
      </div>
      <div className="text-2xl font-bold mb-4">
        Blake&apos;s Most Recent GitHub Repositories:
      </div>
      <Suspense fallback={<LoadingText />}>
        <RepositoryTable />
      </Suspense>
    </main>
  );
}
