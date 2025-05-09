'use client';

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <h1 className="text-2xl font-bold">
        <Link href="/">
          Chatty Chat
        </Link>
      </h1>
    </header>
  );
}