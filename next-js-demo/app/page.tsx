import cryptoRandomString from "crypto-random-string";

export const dynamic = 'force-dynamic';

const getGraphQlData = async () => {
  // Simulating getting some data that takes 2 seconds to retrieve
  return new Promise(resolve => {
    setTimeout(() => {
      const fakeData = {
        myObjects: [
          {
            name: 'object1',
            someValue: cryptoRandomString({ length: 8, type: 'alphanumeric' })
          },
          {
            name: 'object2',
            someValue: cryptoRandomString({ length: 8, type: 'alphanumeric' })
          }
        ]
      };
      resolve(fakeData);
    }, 2000); 
  });
};

export default async function Home() {
  const currentTime = new Date().toLocaleTimeString()
  const graphQlData = await getGraphQlData();
  const graphQlDataString = JSON.stringify(graphQlData, null, 2);

  return (
    <main className="flex min-h-screen flex-col justify-center p-24">
      <div className="text-4xl font-bold mb-4">Current Time:</div>
      <div className="text-2xl mb-8">{currentTime}</div>
      <div className="text-4xl font-bold mb-4">Fake GraphQL Data:</div>
      <pre className="text-2xl whitespace-pre-wrap">{JSON.stringify(graphQlData, null, 2)}</pre>
    </main>
  );
}
