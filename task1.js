// This is the js file for displaying a card with question and answer

function displayAnswer(){
    document.getElementById("demo").innerHTML = "Patch 6.5!!!"
}

function clickToCheckAnswer(){
    document.getElementById("demo").innerHTML = "Click to Check Answer......";
}

function hideAnswer(){
    document.getElementById("demo").innerHTML = "What is the Current Patch?";
}

document.getElementById("myCard").addEventListener("click", displayAnswer);
document.getElementById("myCard").addEventListener("mouseover", clickToCheckAnswer);
document.getElementById("myCard").addEventListener("mouseout", hideAnswer);


