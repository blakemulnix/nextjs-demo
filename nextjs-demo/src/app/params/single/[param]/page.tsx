export default function Page({ params }: any) {

  return (
    <main className="flex min-h-screen flex-col p-12 items-center">
      <div className="text-3xl font-bold mb-8">Single Param</div>
      <div className="text-xl mb-8" suppressHydrationWarning>
        This page accepts a single param in the URL
      </div>
      <div className="text mb-8" suppressHydrationWarning>
        Params: {JSON.stringify(params)}
      </div>
    </main>
  );
}
