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

            let carouselItems = getCarouselItems(carousel);
            console.log(getActiveItem(carouselItems));
            let activeItem = getActiveItem(carouselItems);
            activeItem.activeItem.classList.remove('active');
            let nextItem = getNextItem(carouselItems, activeItem.activeItemIndex, 'prev');
            nextItem.nextItem.classList.add('active')

        })
        next.item(0).addEventListener("click", () => {
            console.log('carousel #', carousel.id)

            let carouselItems = getCarouselItems(carousel);
            console.log(getActiveItem(carouselItems));
            let activeItem = getActiveItem(carouselItems);
            activeItem.activeItem.classList.remove('active');
            let nextItem = getNextItem(carouselItems, activeItem.activeItemIndex, 'next');
            nextItem.nextItem.classList.add('active')

        })
    })
}