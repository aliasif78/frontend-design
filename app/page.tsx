'use client';

// Next JS
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-row items-center justify-center gap-4 py-[3rem] text-center">
      <Link href="/upper" className="rounded-full bg-emerald-600 px-4 py-2 text-2xl text-white transition-all duration-300 hover:bg-emerald-700">
        Upper
      </Link>

      <Link href="/nike-jordan" className="rounded-full bg-blue-600 px-4 py-2 text-2xl text-white transition-all duration-300 hover:bg-blue-700">
        Nike Jordan
      </Link>

      <Link href="/quiz-tower" className="rounded-full bg-indigo-600 px-4 py-2 text-2xl text-white transition-all duration-300 hover:bg-indigo-700">
        Quiz Tower
      </Link>
    </div>
  );
}
