import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="display text-[8rem] leading-none text-aqua">404</p>
        <h1 className="display mt-2 text-4xl">This page got scrubbed away.</h1>
        <Link href="/" className="btn btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </div>
  );
}
