import getCurrentTime from "@/src/util/TimeUtils";

export const dynamic = "force-static";
export const revalidate = false;

export default async function Home() {
  const currentTime = getCurrentTime();

  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <div className="text-3xl font-bold mb-8">
        Statically generated page (rendered at build time)
      </div>
      <div className="text-xl mb-8">
        This page is rendered at build time. This page was rendered at{" "}
        {currentTime}.
      </div>
    </main>
  );
}
