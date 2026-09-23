/* Replace this one value when the catalog moves to Google Drive. */
const CATALOG_URL = "https://drive.google.com/file/d/1yF_GfG69Q91EM-uTq_33TOlcDl4yU3i2/view";
const OPEN_DELAY_MS = 1350;

const button = document.getElementById("openCatalog");
const status = document.getElementById("status");
button.href = CATALOG_URL;

window.setTimeout(() => {
  status.textContent = "Opening catalog…";
  const opened = window.open(CATALOG_URL, "_blank", "noopener,noreferrer");
  if (!opened) {
    status.textContent = "Tap OPEN CATALOG to continue.";
    button.focus({ preventScroll: true });
  } else {
    status.textContent = "Catalog opened in a new tab.";
  }
}, OPEN_DELAY_MS);
