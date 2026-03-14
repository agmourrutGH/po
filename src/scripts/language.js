const button = document.getElementById("langToggle");

let lang = localStorage.getItem("lang") || "en";

button.addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  localStorage.setItem("lang", lang);
  location.reload();
});

function applyLanguage() {
  document.querySelectorAll("[data-en]").forEach((el) => {
    const element = el;
    const value = element.dataset[lang];
    if (value != null) element.textContent = value;
  });

  if (langButton) {
    langButton.textContent = lang === "en" ? "ES" : "EN";
  }

  const cvHeader = document.getElementById("cvButton");
  const cvContact = document.getElementById("cvDownload");

  const cvFile =
    lang === "en"
      ? "/CV%20Agustin%20Mourrut%20EN.pdf"
      : "/CV%20Agustin%20Mourrut%20ES.pdf";

  if (cvHeader) cvHeader.href = cvFile;
  if (cvContact) cvContact.href = cvFile;
}
