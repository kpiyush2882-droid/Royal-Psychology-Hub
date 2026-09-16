function toggleTheme() {

  document.body.classList.toggle("dark");

  const button = document.querySelector(".theme");

  if (document.body.classList.contains("dark")) {
    button.innerHTML = "☀";
  } else {
    button.innerHTML = "☾";
  }

}