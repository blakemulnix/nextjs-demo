"use client";
import React, { useState, useEffect } from "react";
import getCurrentTime from "@/src/util/TimeUtils";
import { ApolloClient, ApolloQueryResult, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/", // SpaceX's free GraphQL API
  cache: new InMemoryCache(),
});

const GET_LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`;

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const [dataRetrieved, setDataRetrieved] = useState(false);
  const [graphQlData, setGraphQlData] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    client.query({
      query: GET_LAUNCHES,
    }).then((response: ApolloQueryResult<any>) => {
      setGraphQlData(response.data);
      setDataRetrieved(true);
    });
  }, []);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <div className="text-3xl font-bold mb-8">Client Rendered Page</div>
      <div className="text-xl mb-8" suppressHydrationWarning>
        This is being rendered in your browser and has client state. Here is the
        current time: {currentTime}.
      </div>
      <div className="text-xl font-bold mb-4">Click Count:</div>
      <div className="text-xl mb-8">{clickCount}</div>
      <button
        className="bg-black hover:bg-gray-800 text-xl font-bold py-2 px-4 mb-8 rounded border border-white transition-all duration-300"
        onClick={handleClick}
      >
        Click me
      </button>
      <div className="text-xl mb-8">
        {!dataRetrieved ? (
          "Retrieving data.."
        ) : (
          <>{JSON.stringify(graphQlData, null, 2)}</>
        )}
      </div>
    </main>
  );
}
