"use client"
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-5xl font-bold mb-8">Client (rendered client side)</div>
      <div className="text-4xl font-bold mb-4">Current Time:</div>
      <div className="text-2xl mb-8">{currentTime}</div>
      <div className="text-4xl font-bold mb-4">Click Count:</div>
      <div className="text-2xl mb-8">{clickCount}</div>
      <button
        className="text-2xl border border-white rounded-full px-6 py-3 bg-black text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        Click me
      </button>
    </main>
  );
}
