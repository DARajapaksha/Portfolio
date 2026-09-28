document.getElementById("year").textContent = new Date().getFullYear();

// Friendly console note about the placeholder links (repo/demo/linkedin)
// so it's obvious in devtools which ones still need real URLs.
const placeholders = document.querySelectorAll("[data-slot]");
if (placeholders.length) {
  console.info(
    `Portfolio: ${placeholders.length} placeholder links still need real URLs (GitHub repos, live demos, LinkedIn). See README.md.`
  );
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Scroll progress ruler */
const rulerFill = document.getElementById("rulerFill");
function updateRuler() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (rulerFill) rulerFill.style.width = pct + "%";
}
let rulerTicking = false;
window.addEventListener("scroll", () => {
  if (!rulerTicking) {
    requestAnimationFrame(() => { updateRuler(); rulerTicking = false; });
    rulerTicking = true;
  }
}, { passive: true });
updateRuler();

/* Scrollspy: highlight active nav item */
const navLinks = document.querySelectorAll(".topnav a[data-section]");
const sections = Array.from(navLinks)
  .map(a => document.getElementById(a.dataset.section))
  .filter(Boolean);

if (sections.length && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = document.querySelector(`.topnav a[data-section="${entry.target.id}"]`);
      if (!link) return;
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });
  sections.forEach(s => spy.observe(s));
}

/* Reticle cursor within hero, mouse-driven only */
const hero = document.querySelector(".hero");
const reticle = document.getElementById("reticle");
if (hero && reticle && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    reticle.style.left = (e.clientX - rect.left) + "px";
    reticle.style.top = (e.clientY - rect.top) + "px";
    reticle.classList.add("live");
  });
  hero.addEventListener("mouseleave", () => reticle.classList.remove("live"));
}

/* Copy email to clipboard */
const copyBtn = document.getElementById("copyEmailBtn");
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      // Fallback for environments without clipboard API
      const ta = document.createElement("textarea");
      ta.value = email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied ✓";
    copyBtn.classList.add("copied");
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("copied");
    }, 1800);
  });
}
