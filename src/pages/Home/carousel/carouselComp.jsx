import React from 'react';

import "./carouselStyle.css";


export const Carousel = ()=> {
    return (
        <div id="items-wrapper">
            <div id="items">
                <div class="item"><img src="https://unsplash.it/1600/400?image=950" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=930" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=990" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=980" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=970" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=976" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=993" /></div>
                <div class="item"><img src="https://unsplash.it/1600/400?image=969" /></div>
            </div>
        </div>

    );
}


document.querySelector("items").addEventListener("whell",event =>{
    console.log(event);
    if(event.deltaY > 0){
        event.target.scrollBy(300,0)
    }else{
        event.target.scrollBy(-300,0);
    }
})

