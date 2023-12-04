"use client";
import React, { useState } from "react";

interface Animal {
  id: number;
  name: string;
  breed: string;
  age: number;
}

const buttonClasses = "bg-black hover:bg-gray-800 text-white font-bold py-1 px-2 rounded border border-white transition-all duration-300 mb-4";

const CatsAndDogsList: React.FC = () => {
  const [cats, setCats] = useState<Animal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (
    endpoint: string,
    setData: React.Dispatch<React.SetStateAction<Animal[]>>
  ) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/animals/${endpoint}`);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching ${endpoint} data:`, error);
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="text-3xl font-bold mb-8">Data Fetching</div>
      <div className="text-xl mb-8" suppressHydrationWarning>
        This client side page fetches data from the Next.js backend.
      </div>
      <div className="flex flex-col space-x-4">
        <div className="flex flex-row justify-center">
          <button onClick={() => fetchData("cats", setCats)} disabled={loading}
          className={buttonClasses}>
            {loading ? "Loading Cats..." : "Fetch Cats"}
          </button>
        </div>

        <div className="flex flex-row">
          {loading ? (
            <pre>Loading..</pre>
          ) : (
            <pre className="m-w-[100px]">{JSON.stringify(cats, null, 2)}</pre>
          )}
        </div>
      </div>
    </main>
  );
};

export default CatsAndDogsList;
