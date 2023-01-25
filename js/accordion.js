if (document.readyState != 'loading'){
    init();
}
else {
    document.addEventListener('DOMContentLoaded', () => {
        init();
    })
}

function init(){
    const accordions = document.getElementsByClassName ( 'accordion-title' );
    console.log ( accordions );

    if (document.readyState !=='loading'){
        [...accordions].forEach(( accordiontitle, index, array ) => {
            console.log ( accordiontitle );
            accordiontitle.addEventListener ( 'click', () => {
                console.log ( 'clicked' );
                const content = accordiontitle.parentElement.querySelectorAll ( '.accordion-content' );
                console.log ( content );
                content.forEach ( ( contentdiv, key, parent ) => {
                    contentdiv.classList.toggle ( 'expanded' );
                } );
            } );
    
        } );
    }
}