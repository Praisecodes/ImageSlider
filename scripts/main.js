// Code By A JavaScript Beginner (Praise Codes)

var images = [
    "http://127.0.0.1:5500/Images/1.jpg",
    "http://127.0.0.1:5500/Images/2.jpg",
    "http://127.0.0.1:5500/Images/3.jpg",
    "http://127.0.0.1:5500/Images/4.jpeg"
];

var chk = 0;

const Next = () =>{
    var currentImage = document.getElementById("ImageDisplayed");
    images.forEach(im=>{
        if(currentImage.src == im){
            chk = images.indexOf(im);
            chk++
        }
    });
    if(chk == 4){
        currentImage.src = images[0];
    }else{
        currentImage.src = images[chk];
    }
}

const Prev = () => {
    var currentImage = document.getElementById("ImageDisplayed");
    images.forEach(im=>{
        if(currentImage.src == im){
            chk = images.indexOf(im);
            chk--;
        }
    });

    if(chk == -1){
        currentImage.src = images[3];
        chk = 0;
    }else{
    currentImage.src = images[chk];}
}
