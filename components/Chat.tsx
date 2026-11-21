"use client";

import { useEffect, useRef, useState } from "react";
import { useStore } from "./Store";
import { answer, GREETING, QUICK } from "@/lib/assistant";

type Msg = { who: "bot" | "me"; text: string };

export default function Chat() {
  const { chatOpen, openChat, closeChat, productId, closeProduct } = useStore();
  const [msgs, setMsgs] = useState<Msg[]>([{ who: "bot", text: GREETING }]);
  const [quick, setQuick] = useState(true);
  const [busy, setBusy] = useState(false);
  const [draft, setDraft] = useState("");
  const list = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatOpen) input.current?.focus();
  }, [chatOpen]);
  useEffect(() => {
    if (list.current) list.current.scrollTop = list.current.scrollHeight;
  }, [msgs]);
  // Escape closes the product popup first, then the assistant.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (productId) closeProduct();
      else closeChat();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [productId, closeProduct, closeChat]);

  const ask = (q: string) => {
    if (busy || !q.trim()) return;
    setBusy(true);
    setQuick(false);
    setMsgs((m) => [...m, { who: "me", text: q }, { who: "bot", text: "…" }]);
    setTimeout(() => {
      setMsgs((m) => [...m.slice(0, -1), { who: "bot", text: answer(q) }]);
      setBusy(false);
    }, 450);
  };

  return (
    <>
      <button className={`chatfab${chatOpen ? " hide" : ""}`} aria-label="Open the Novara assistant" onClick={openChat}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="M4 5h16v11H9l-5 4z" />
          <path d="M8.500 10.500h.01M12 10.500h.01M15.500 10.500h.01" strokeLinecap="round" strokeWidth="2.600" />
        </svg>
        <span>Ask Novara</span>
      </button>
      <div className={`chat${chatOpen ? " on" : ""}`} role="dialog" aria-label="Novara assistant">
        <header>
          <img src="/mark-white.png" alt="" />
          <div>
            <b>Novara assistant</b>
            <small>AI helper for products and delivery</small>
          </div>
          <button aria-label="Close assistant" onClick={closeChat}>
            ×
          </button>
        </header>
        <div className="msgs" aria-live="polite" ref={list}>
          {msgs.map((m, i) => (
            <div key={i} className={`m ${m.who}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="quick">
          {quick &&
            QUICK.map((q) => (
              <button key={q} onClick={() => ask(q)}>
                {q}
              </button>
            ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(draft);
            setDraft("");
          }}
        >
          <label className="sr" htmlFor="chatin">
            Your question
          </label>
          <input id="chatin" ref={input} value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Ask about products or delivery" autoComplete="off" />
          <button aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.400" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
        <div className="fine">AI answers can be wrong. For order issues, contact us.</div>
      </div>
    </>
  );
}
