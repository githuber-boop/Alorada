const checkbox = document.getElementById("checkbox");
const links = document.querySelector('.links')
const hamburger = document.querySelector('.hamburger')
const themeToggle = document.querySelector('.theme_toggle')
const hamburgerLine = document.querySelector('.line')
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    hamburgerLine.classList.toggle('white');
  });


hamburger.addEventListener('click' , () => {
  const visibility = links.getAttribute('data-visible');
  const themeToogleVisibility = themeToggle.getAttribute('data-visible')

  hamburgerLine.classList.toggle('black');


  if (visibility === "false") {
    links.setAttribute("data-visible" , true)
  } else if (visibility === "true") {
    links.setAttribute("data-visible" , false)
  }



})