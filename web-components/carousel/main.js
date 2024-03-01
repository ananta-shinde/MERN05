
var imageContainer = document.querySelector(".image-container")
var scrollwidth = imageContainer.clientWidth
var index = 0;
var images = document.querySelectorAll("img");

function loadImage(index){
    images[index].style.transform = `translateX(${-755*index}px)`
}

function nextClicked()
{
    if(index > (images.length -1))
    {
        index = 0;
    }else{
        index++;
    }
    
    loadImage(index);
}

 


