"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  if (done) return <p className="mt-3 text-sm text-citrus">Thanks — you&apos;re on the list.</p>;
  return (
    <form
      className="mt-3 flex max-w-sm gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Email address"
        aria-label="Email address"
        className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-citrus focus:outline-none"
      />
      <button className="btn btn-citrus !py-2.5">Sign up</button>
    </form>
  );
}
