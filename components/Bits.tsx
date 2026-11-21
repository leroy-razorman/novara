"use client";

// Small interactive pieces used inside otherwise static pages.
import Link from "next/link";
import { useEffect, useState } from "react";
import { useStore } from "./Store";
import { validate, clearOnInput } from "@/lib/forms";

/** "Shop now" on the home page: scrolls down to the product grid. */
export function ScrollButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <button className="btn ink" onClick={() => document.getElementById(to)?.scrollIntoView({ behavior: "smooth" })}>
      {children}
    </button>
  );
}

export function ChatButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openChat } = useStore();
  return <button {...props} onClick={openChat} />;
}

export function Toast() {
  const { toast } = useStore();
  return (
    <div className={`toast${toast.on ? " on" : ""}`} role="status" aria-live="polite">
      {toast.message}
      {toast.link && <> <Link href="/basket">View basket</Link></>}
    </div>
  );
}

/** Fades sections in as they scroll into view (elements with class "rv"). */
export function RevealWatcher() {
  useEffect(() => {
    const animate = "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion:reduce)").matches;
    const io = animate
      ? new IntersectionObserver(
          (es) =>
            es.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in");
                io!.unobserve(e.target);
              }
            }),
          { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
        )
      : null;
    const watch = () => document.querySelectorAll(".rv:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
    watch();
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io?.disconnect();
    };
  }, []);
  return null;
}

export function Newsletter() {
  const [state, setState] = useState<"idle" | "error" | "ok">("idle");
  return (
    <>
      <form
        className="news joinform"
        noValidate
        onSubmit={(e) => {
          e.preventDefault();
          const em = e.currentTarget.querySelector("input")!;
          if (!em.value || !em.checkValidity()) {
            setState("error");
            em.focus();
            return;
          }
          setState("ok");
          em.value = "";
        }}
      >
        <label className="sr" htmlFor="nl1">
          Email address
        </label>
        <input id="nl1" type="email" placeholder="you@example.com" autoComplete="email" required />
        <button className="btn ink" type="submit">
          Subscribe
        </button>
      </form>
      <p className="newserr" style={{ display: state === "error" ? "block" : undefined }}>
        Enter a valid email address, like name@example.com.
      </p>
      <p className={`okmsg${state === "ok" ? " on" : ""}`}>You are subscribed. The next letter will reach you.</p>
    </>
  );
}

const topics = ["An order", "Partnership", "Supplying an organisation", "Press", "Something else"];

export function ContactForm() {
  const [ok, setOk] = useState(false);
  return (
    <>
      <form
        className="f"
        noValidate
        onInput={clearOnInput}
        onSubmit={(e) => {
          e.preventDefault();
          if (!validate(e.currentTarget)) {
            setOk(false);
            return;
          }
          setOk(true);
          e.currentTarget.reset();
        }}
      >
        <div className="full">
          <span className="optl" style={{ marginTop: 0 }}>
            What is this about?
          </span>
          <div className="pick" role="radiogroup" aria-label="Topic">
            {topics.map((t, i) => (
              <label key={t}>
                <input type="radio" name="topic" defaultChecked={i === 0} />
                <span>{t}</span>
              </label>
            ))}
          </div>
        </div>
        <label className="field">
          <span className="l">Name</span>
          <input id="cn" required autoComplete="name" />
          <span className="msg">Enter your name.</span>
        </label>
        <label className="field">
          <span className="l">Email</span>
          <input id="ce" type="email" required autoComplete="email" placeholder="you@example.com" />
          <span className="msg">Enter a valid email address.</span>
        </label>
        <label className="field full">
          <span className="l">Message</span>
          <textarea id="cm" required placeholder="How can we help?" />
          <span className="msg">Write a short message.</span>
        </label>
        <div className="full">
          <button className="btn ink" type="submit">
            Send message
          </button>
        </div>
      </form>
      <p className={`okmsg${ok ? " on" : ""}`}>Message received. We will reply within two working days.</p>
    </>
  );
}
