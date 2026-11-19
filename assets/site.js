const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");
const mobile = window.matchMedia("(max-width: 860px)");

function setMenu(open) {
  menu.hidden = !mobile.matches;
  menu.setAttribute("aria-expanded", String(open));
  nav.hidden = mobile.matches && !open;
}

setMenu(false);
mobile.addEventListener("change", () => setMenu(false));
menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") === "false"));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobile.matches && !nav.hidden) {
    setMenu(false);
    menu.focus();
  }
});

const config = window.oakridgeConfig ?? {};
for (const link of document.querySelectorAll("[data-config]")) {
  const key = link.dataset.config;
  const value = config[key];
  if (!URL.canParse(value)) continue;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password) continue;
  link.href = url.href;
  link.hidden = false;
  document.querySelector(`[data-pending="${key}"]`).hidden = true;
}

const form = document.querySelector("#inquiry");
if (form) {
  const draft = document.querySelector("#inquiry-draft");
  const result = document.querySelector("#inquiry-result");
  const status = document.querySelector("#form-status");
  const emailLink = document.querySelector("#open-email");
  const email = config.inquiryEmail?.trim() ?? "";
  const hasEmail = /^[\w.!#$%&'*+/=^_\x60{|}~-]+@[\w.-]+\.[a-z]{2,}$/i.test(email);
  document.querySelector('[data-pending="inquiryEmail"]').hidden = hasEmail;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    draft.value = Array.from(new FormData(form), ([label, value]) => `${label}: ${value}`).join("\n\n");
    result.hidden = false;
    if (hasEmail) {
      emailLink.href = `mailto:${encodeURIComponent(email).replace("%40", "@")}?subject=Property%20management%20inquiry&body=${encodeURIComponent(draft.value)}`;
      emailLink.hidden = false;
    }
    status.textContent = "Inquiry draft ready.";
    draft.focus();
  });
  form.addEventListener("input", () => {
    result.hidden = true;
    status.textContent = "";
  });
  document.querySelector("#copy-inquiry").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(draft.value);
      status.textContent = "Inquiry copied.";
    } catch {
      draft.focus();
      draft.select();
      status.textContent = "The draft is selected. Use your device’s copy command.";
    }
  });
}
