function initLanguage() {
  const langButton = document.getElementById("langToggle");
  const cvHeader = document.getElementById("cvHeader");
  const cvContact = document.getElementById("cvContact");

  let lang =
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("es") ? "es" : "en");

  function applyLanguage() {
    document.querySelectorAll("[data-en]").forEach((el) => {
      const value = el.dataset[lang];
      if (value) el.textContent = value;
    });

    const cvFile =
      lang === "en"
        ? "/cv-agustin-mourrut-en.pdf"
        : "/cv-agustin-mourrut-es.pdf";

    if (cvHeader) cvHeader.href = cvFile;
    if (cvContact) cvContact.href = cvFile;

    if (langButton) {
      langButton.textContent = lang === "en" ? "ES" : "EN";
    }

    document.documentElement.lang = lang;
  }

  applyLanguage();

  if (langButton) {
    langButton.addEventListener("click", () => {
      lang = lang === "en" ? "es" : "en";
      localStorage.setItem("lang", lang);
      applyLanguage();
    });
  }
}

if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initLanguage);
}