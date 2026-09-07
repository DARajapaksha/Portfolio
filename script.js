document.getElementById("year").textContent = new Date().getFullYear();

// Friendly console note about the placeholder links (repo/demo/linkedin)
// so it's obvious in devtools which ones still need real URLs.
const placeholders = document.querySelectorAll("[data-slot]");
if (placeholders.length) {
  console.info(
    `Portfolio: ${placeholders.length} placeholder links still need real URLs (GitHub repos, live demos, LinkedIn). See README.md.`
  );
}
