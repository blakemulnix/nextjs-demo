export default async function Home() {
  const currentTime = new Date().toLocaleTimeString()

  return (
    <main className="flex min-h-screen flex-col p-24 items-center">
      <div className="text-3xl font-bold mb-8">Statically generated page (rendered at build time)</div>
      <div className="text-2xl font-bold mb-8">This page was rendered at build time</div>
      <div className="text-xl font-bold mb-4">Time at build time:</div>
      <div className="text-xl mb-8">{currentTime}</div>
    </main>
  );
}