(function(){
    "use strict";
    const myImages = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    let currentImage = 0;
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    function swapImage(){
        const newSlide = document.createElement('img');
        newSlide.src = `slides/${myImages[currentImage]}`;
        newSlide.className = "fadeinimg";
        container.appendChild(newSlide);

        if (container.children.length>2 ){
            container.removeChild(container.children[0]);
        }

    }
    nextBtn.addEventListener('click', function(event){
        event.preventDefault();
        currentImage++ ;
        if (currentImage> myImages.length-1) {currentImage = 0 ;}
        swapImage();
        
    });
    prevBtn.addEventListener('click',function(event){
        event.preventDefault();
        currentImage-- ;
        if (currentImage < 0) {currentImage = 4 ;}
        swapImage();
    });
    

})();