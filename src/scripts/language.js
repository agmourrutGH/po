const button = document.getElementById("langToggle");

let lang = localStorage.getItem("lang") || "en";

button.addEventListener("click", () => {
  lang = lang === "en" ? "es" : "en";
  localStorage.setItem("lang", lang);
  location.reload();
});