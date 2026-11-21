// Form validation as in the design: marks each invalid ".field" with the
// "bad" class (which reveals its message) and focuses the first one.
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export function validate(form: HTMLFormElement) {
  let first: Control | null = null;
  form.querySelectorAll(".field").forEach((f) => {
    const i = f.querySelector<Control>("input,select,textarea")!;
    const bad = !i.value.trim() || !i.checkValidity();
    f.classList.toggle("bad", bad);
    if (bad && !first) first = i;
  });
  (first as Control | null)?.focus();
  return !first;
}

/** Clears a field's error as soon as its value becomes valid. */
export function clearOnInput(e: React.FormEvent<HTMLFormElement>) {
  const t = e.target as Control;
  const f = t.closest(".field.bad");
  if (f && t.value.trim() && t.checkValidity()) f.classList.remove("bad");
}
