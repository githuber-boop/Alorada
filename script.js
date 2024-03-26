const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
  });

const links = document.querySelector('.links')
const hamburger = document.querySelector('.hamburger')
const themeToggle = document.querySelector('.theme_toggle')

hamburger.addEventListener('click' , () => {
  const visibility = links.getAttribute('data-visible');
  const themeToogleVisibility = themeToggle.getAttribute('data-visible')

  if (visibility === "false") {
    links.setAttribute("data-visible" , true)
  } else if (visibility === "true") {
    links.setAttribute("data-visible" , false)
  }



})