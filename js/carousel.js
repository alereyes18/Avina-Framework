if (document.readyState == 'loading') {
    init();
}

else {
    document.addEventListener('DOMContentLoaded', (state) => {
        console.log(state);
        console.log('else post: ', document.readyState);
        init();
    })
}

function init() {
    const carousels = document.querySelectorAll('.carousel');
    function getCarouselItems(carousel) {
        let carouselChildren, carouselInner, carouselItems;
        //Get the children of the carousel item (should be carousel-indicators, carousel-inner, carousel-control)
        carouselChildren = carousel.children;
        //Find the inner element
        for (child of carouselChildren) {
            if (child.classList.contains('carousel-inner')) carouselInner = child;
        }
        //Get the carousel-item elements
        carouselItems = carouselInner.children;
        return carouselItems;
    }
    function getActiveItem(carouselItems) {
        let activeItemIndex, activeItem;
        for (let i = 0; i < carouselItems.length; i++) {
            let currentItem = carouselItems.item(i);

            console.log('Index:', i, '\nItem:', currentItem)
            //Check if the current item is the active item
            if (currentItem.classList.contains('active')) {
                //Set the active item and its index in carouselItems
                activeItemIndex = i;
                activeItem = currentItem;
                console.log('Active Index:', i, '\nActive Item:', activeItem)
                break
            }
        }
        return { activeItemIndex, activeItem };
    }
    function getNextItem(carouselItems, activeItemIndex, direction) {
        let nextItemIndex, nextItem;
        if (direction == 'prev') {
            //If the activeItemIndex is the first item, nextItemIndex will be the last item
            if (activeItemIndex == 0) {
                nextItemIndex = carouselItems.length - 1;
                nextItem = carouselItems.item(nextItemIndex);
                console.log('Next Item Index:', nextItemIndex, '\nNext Item:', nextItem)
            }
            else {
                //Else, the nextItemIndex will be activeItemIndex+1
                nextItemIndex = activeItemIndex - 1;
                nextItem = carouselItems.item(nextItemIndex);
                console.log('Next Item Index:', nextItemIndex, '\nNext Item:', nextItem)
            }
        }
        else if (direction == 'next') {
            //If the activeItemIndex is the first item, nextItemIndex will be the last item
            if (activeItemIndex == carouselItems.length - 1) {
                nextItemIndex = 0;
                nextItem = carouselItems.item(nextItemIndex);
                console.log('Next Item Index:', nextItemIndex, '\nNext Item:', nextItem)
            }
            else {
                //Else, the nextItemIndex will be activeItemIndex+1
                nextItemIndex = activeItemIndex + 1;
                nextItem = carouselItems.item(nextItemIndex);
                console.log('Next Item Index:', nextItemIndex, '\nNext Item:', nextItem)
            }
        }
        return { nextItemIndex, nextItem }
    }

    carousels.forEach(carousel => {
        const prev = carousel.getElementsByClassName('carousel-control-prev')
        const next = carousel.getElementsByClassName('carousel-control-next')

        prev.item(0).addEventListener("click", () => {
            console.log('carousel #', carousel.id)
            setNextItem(carousel, 'prev');
        })
        next.item(0).addEventListener("click", () => {
            console.log('carousel #', carousel.id)
            setNextItem(carousel, 'next');
        })
    })
    function setNextItem(carousel, direction) {
        let carouselItems = getCarouselItems(carousel);
        console.log(getActiveItem(carouselItems));
        let activeItem = getActiveItem(carouselItems);
        let nextItem = getNextItem(carouselItems, activeItem.activeItemIndex, direction);

        direction == 'next' ? nextItem.nextItem.classList.add('slideout') : nextItem.nextItem.classList.add('slidein');
        if (direction == 'next'){
            nextItem.nextItem.classList.add('slideout');
            activeItem.activeItem.classList.add('slidein');
        }
        else {
            nextItem.nextItem.classList.add('slidein');
            activeItem.activeItem.classList.add('slideout');
        }
 
         setTimeout( () => {
            if (direction == 'next'){
                nextItem.nextItem.classList.remove('slideout');
                activeItem.activeItem.classList.remove('slidein');
            }
            else {
                nextItem.nextItem.classList.remove('slidein');
                activeItem.activeItem.classList.remove('slideout');
            }
            activeItem.activeItem.classList.remove('active');
            nextItem.nextItem.classList.add('active')
    
         }, 50)
 
    }
    for (carousel of carousels) {
        if (carousel.classList.contains('autoplay')) {
            setInterval(() => {
                setNextItem(carousel, 'next');
            }, 4000)

        }
    }
}