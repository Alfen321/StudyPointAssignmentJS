var initStyle = document.getElementsByTagName("div");

for (var i = 0; i < initStyle.length; i++) {
    var style = initStyle[i].style;
    style.color = "white";
    style.backgroundColor = "red";
    style.width = "fit-content";

}


var colors = ["blue", "green", "red", "yellow", "purple", "pink", "orange", "black", "white"];
var randomColor = function () {
    return colors[Math.floor(Math.random() * colors.length)];
};

var restyleMe = function () {
    document.getElementById("iAmDiv1").style.backgroundColor = randomColor();
    document.getElementById("iAmDiv1").style.color = randomColor();

    document.getElementById("iAmDiv2").style.backgroundColor = randomColor();
    document.getElementById("iAmDiv2").style.color = randomColor();

    document.getElementById("iAmDiv3").style.backgroundColor = randomColor();
    document.getElementById("iAmDiv3").style.color = randomColor();
};