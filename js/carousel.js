if (document.readyState == 'loading'){
    console.log('if: ',document.readyState);
    init();
}
else {
    console.log('else: ',document.readyState);

    document.addEventListener('DOMContentLoaded', (state) => {
        console.log(state);
        console.log('else post: ',document.readyState);

        init();
        
    })

}

function init(){
const carousels = document.querySelectorAll('.carousel');
console.log('carousels:',carousels)
const prev= document.getElementsByClassName('carousel-control-prev');
const next= document.getElementsByClassName('carousel-control-next');
const carouselItems = document.getElementsByClassName('carousel-item')
for (let i = 0; i < prev.length; i++){

    prev.item(i).addEventListener("click", () =>{
        // console.log('prev clicked', next.item(i));
        for(let i = 0; i < carouselItems.length; i++){
            let currentItem = carouselItems.item(i);
            let nextIndex;
            
            if( currentItem.classList.contains('active')){
                // console.log('This item contains active:', currentItem, 'with index ', i);
                //Check which image should be active after clicking next
                if(i == 0){ 
                    //If the current active item is the first item, the index of the next item is the last item
                    nextIndex = carouselItems.length-1;
                }
                else{
                    //If the index of the current active item is not the first item, decrement the index
                    nextIndex = i-1;
                }
                // console.log('length:',carouselItems.length, "current index:", i, "next index:", nextIndex);
                //After finding the index of the next item to be active, get the next item
                let nextItem = carouselItems.item(nextIndex);
                //Remove active from current item
                currentItem.classList.remove('active');
                //And add active to the next item
                nextItem.classList.add('active');
                break;
            }
            else{
                // console.log("This item DOES NOT contain active:",currentItem);
            }
        }
    })

    next.item(i).addEventListener("click", () =>{
        // console.log('next clicked', next.item(i));
        for(let i = 0; i < carouselItems.length; i++){
            let currentItem = carouselItems.item(i);
            let nextIndex;
            if( currentItem.classList.contains('active')){
                // console.log('This item contains active:', currentItem);
                //Check which image should be active after clicking next
                if(i == carouselItems.length - 1){ 
                    //If the current active item is the last item, the index of the next item is 0
                    nextIndex = 0
                }
                else{
                    //If the index of the current active item is not the last item, increment the index
                    nextIndex = i+1;
                }
                // console.log('length:',carouselItems.length, "current index:", i, "next index:", nextIndex);
                //After finding the index of the next item to be active, get the next item
                let nextItem = carouselItems.item(nextIndex);
                //Remove active from current item
                currentItem.classList.remove('active');
                //And add active to the next item
                nextItem.classList.add('active');
                break;
            }
            else{
                // console.log("This item DOES NOT contain active:",currentItem);
            }
        }
    })
}
}