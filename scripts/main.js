// Code By A JavaScript Beginner (Praise Codes)

var images = [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpeg"
];

var chk = 0;

const Next = () =>{
    var currentImage = document.getElementById("ImageDisplayed");
    chk++
    if(chk>=images.length){
        chk = 0;
    }
    currentImage.src = images[chk];
}

const Prev = () => {
    var currentImage = document.getElementById("ImageDisplayed");
    chk--;
    if(chk < 0){
        chk = images.length-1;
    }
    currentImage.src = images[chk];
}
