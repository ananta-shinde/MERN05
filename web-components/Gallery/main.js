
var images = [
    "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg",
    "https://t3.ftcdn.net/jpg/05/71/06/04/360_F_571060419_Owx0HieYkYocICzV4W7IxmXpdmP1xo7F.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwkiP2A1S9_aSbePd1tAHkter9_P-0cx0_G8uhl0_lQ&s",
    "https://wallpapercave.com/wp/4cQGz9o.jpg",
    "https://img.freepik.com/free-photo/autumn-season-leafs-plant-scene-generative-ai_188544-7971.jpg"
]

var imgPreview = document.getElementById("img-preview");
imgPreview.setAttribute("src",images[0]);

function handleClick(image)
{
    imgPreview.setAttribute("src",image.src);
}

var thumbContainer = document.getElementById("thumbnail-container")

for(i=0;i<images.length;i++)
{
    thumbContainer.innerHTML = thumbContainer.innerHTML+ `<div class="col-2">
<img class="img-fluid img-thumbnail" src="${images[i]}" onclick="handleClick(this)"/>
</div>`
}


 