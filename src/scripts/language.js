function initLanguage() {
  const langButton = document.getElementById("langToggle");
  const cvHeader = document.getElementById("cvHeader");
  const cvContact = document.getElementById("cvContact");

  let lang =
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("es") ? "es" : "en");

  function applyLanguage() {
    // Cambiar textos según idioma
    document.querySelectorAll("[data-en]").forEach((el) => {
      const value = el.dataset[lang];
      if (value) el.textContent = value;
    });

    // Elegir archivo de CV
    const cvFile =
      lang === "en"
        ? "/cv-agustin-mourrut-en.pdf"
        : "/cv-agustin-mourrut-es.pdf";

    // Actualizar links y forzar apertura en nueva pestaña
    [cvHeader, cvContact].forEach((link) => {
      if (link) {
        link.href = cvFile;
        link.target = "_blank";
        link.rel = "noopener";
      }
    });

    // Cambiar texto del botón
    if (langButton) {
      langButton.textContent = lang === "en" ? "ES" : "EN";
    }

    // Cambiar atributo lang del html
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

// Solo ejecutar en navegador (no SSR)
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", initLanguage);
}