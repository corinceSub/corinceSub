
// This is for randomly displaying text and color every few seconds, task3
var color1 = "red"
var color2 = "orange"
var color3 = "blue"
var color4 = "green"
var color5 = "purple"
var colorArray = [color1, color2, color3, color4, color5]


var messageB = "Let's Celebrate it TOGETHER!!!"
var messageC = "Let Me Sing a Birthday Song for U"
var messageD = "What Kind of Present Would U Like?"
var messageE = "Happy Birthday!!!"
var messageArray = [messageB, messageC, messageD, messageE]

// This is the function for selecting random color
function colorRandom(){
    var rand1 = Math.floor(Math.random() * colorArray.length);
    var colorContent = colorArray[rand1];
    return colorContent;
}

// This is the function for selecting random text
function textRandom(){
    var rand2 = Math.floor(Math.random() * messageArray.length);
    var displayContent = messageArray[rand2];
    return displayContent;
}


function changeDisplay(){
    document.getElementById("birthdayMessage").innerHTML = textRandom()
    document.getElementById("birthdayMessage").style.color =  colorRandom()
}

setInterval(changeDisplay, 3000)