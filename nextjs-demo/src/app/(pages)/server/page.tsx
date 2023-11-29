import LoadingText from "@/src/components/LoadingText";
import RepositoryTable from "@/src/components/RepositoryTable";
import React, { Suspense } from "react";

export default function Page() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <div className="text-3xl font-bold mb-8">Server-side Rendered Page</div>
      <div className="text-xl mb-8">
        This page is rendered on the server for each request. This page was
        rendered at {currentTime}
      </div>
      <div className="text-2xl font-bold mb-4">
        Blake's Most Recent GitHub Repositories:
      </div>
      <Suspense fallback={<LoadingText />}>
        <RepositoryTable />
      </Suspense>
    </main>
  );
}
