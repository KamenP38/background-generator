var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomColor");

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function randomColors(){ 
	color1.value= "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value= "#" + Math.floor(Math.random()*16777215).toString(16);

	color1.addEventListener("input", setGradient());
	color2.addEventListener("input", setGradient());
}

// hexToRgb(color1.value);
// hexToRgb(color2.value);

// setGradient();

color1.addEventListener("input", setGradient());

color2.addEventListener("input", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColors);