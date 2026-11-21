"use client";

import { useState } from "react";

type Field = { name: string; label: string; type?: string; half?: boolean; options?: string[]; textarea?: boolean; required?: boolean };

// Visual-only form: shows a confirmation state but sends nothing yet.
export default function EnquiryForm({ fields, submitLabel, successTitle }: { fields: Field[]; submitLabel: string; successTitle: string }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="grid min-h-72 place-items-center rounded-3xl bg-white p-10 text-center">
        <div>
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-aqua text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
          <p className="display mt-5 text-2xl">{successTitle}</p>
          <p className="mt-2 text-sm text-ink-soft">We&apos;ll get back to you within one business day.</p>
          <button className="btn btn-outline mt-6" onClick={() => setDone(false)}>
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-3xl bg-white p-6 sm:grid-cols-2 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      {fields.map((f) => (
        <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
          <label htmlFor={f.name} className="label">
            {f.label}
          </label>
          {f.textarea ? (
            <textarea id={f.name} name={f.name} rows={4} required={f.required} className="field resize-y" />
          ) : f.options ? (
            <select id={f.name} name={f.name} className="field" defaultValue={f.options[0]}>
              {f.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          ) : (
            <input id={f.name} name={f.name} type={f.type ?? "text"} required={f.required} className="field" />
          )}
        </div>
      ))}
      <button className="btn btn-primary mt-2 !py-3.5 sm:col-span-2">{submitLabel}</button>
    </form>
  );
}
