import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#090c10] px-6 text-center text-white">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#7F5E12]">
        404 | Page not found
      </p>
      <h1 className="mb-4 font-canela text-4xl font-light sm:text-5xl">
        This page isn&apos;t here.
      </h1>
      <p className="mb-8 max-w-md text-neutral-400">
        The page may have moved, or the address may be incorrect.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="border border-white/20 px-5 py-3 text-sm transition-colors hover:border-white/50"
        >
          Back to home
        </Link>
        <Link
          href="/#projects"
          className="bg-[#7F5E12] px-5 py-3 text-sm transition-colors hover:bg-[#7F5E12]/90"
        >
          Explore projects
        </Link>
      </div>
    </main>
  );
}