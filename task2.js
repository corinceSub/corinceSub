// This is the js file for converting between displaying text and image

function showImage(){
    document.getElementById("task2Text").style.display = 'none'
    document.getElementById("task2Image").style.display = 'block'
}

function showText(){
    document.getElementById("task2Text").style.display = 'block'
    document.getElementById("task2Image").style.display = 'none'
}

document.getElementById("imageCard").addEventListener("mouseover", showImage);
document.getElementById("imageCard").addEventListener("mouseleave", showText);