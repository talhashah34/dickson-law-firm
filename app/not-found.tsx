import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm tracking-[0.2em] text-gold-dark">404</p>
      <h1 className="mt-3 font-serif text-4xl text-navy">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you requested is not available. Return home or send an enquiry.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-navy px-5 py-2.5 text-sm font-medium text-white"
      >
        Back to home
      </Link>
    </div>
  );
}
