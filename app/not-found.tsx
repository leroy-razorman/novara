import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page on">
      <div className="wrap thanks">
        <div className="sun" aria-hidden="true"></div>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>We could not find that page.</h1>
        <div className="acts">
          <Link className="btn ink" href="/shop">Shop now</Link>
          <Link className="btn outline" href="/">Back to the site</Link>
        </div>
      </div>
    </section>
  );
}
