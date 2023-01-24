 

 document.addEventListener('DOMContentLoaded', () => {

    console.log('test');
    const accordions = document.getElementsByClassName('accordion-title');
    console.log(accordions);
    
    [...accordions].forEach((accordiontitle, index, array) => {
        console.log(accordiontitle);
        accordiontitle.addEventListener("click", () => {
            console.log('clicked');
            const content = accordiontitle.parentElement.querySelectorAll('.accordion-content');
            console.log(content);
            content.forEach((contentdiv, key, parent) => {
                contentdiv.classList.toggle('expanded');
            })
            })
     
        })
     })
    


 
 