import { ready } from './ready';

ready(accordion);
 function accordion() {
  const accordions = document.getElementsByClassName("accordion-title");
  console.log(accordions);

  if (document.readyState !== "loading") {
    [...accordions].forEach((accordiontitle, index, array) => {
      console.log(accordiontitle);
      accordiontitle.addEventListener("click", () => {
        console.log("clicked");
        const content =
          accordiontitle.parentElement.querySelectorAll(".accordion-content");
        console.log(content);
        content.forEach((contentdiv, key, parent) => {
          contentdiv.classList.toggle("expanded");
        });
      });
    });
  }
}
export default accordion;
 