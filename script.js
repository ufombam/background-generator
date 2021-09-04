let tab1 = document.querySelector(".color1");
let tab2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let randKeyBtn = document.getElementById("kDiv").childNodes[1];

function setGradient() {
	body.style.background = "linear-gradient(to right, " + tab1.value + ", " + tab2.value + ")";
	css.textContent = body.style.background + " " + "Hex1: " + tab1.value + " " + "Hex2: " + tab2.value;
}

window.onload = function() {
	css.textContent = window.getComputedStyle( document.body ,null).getPropertyValue('background-image') + "Hex1: " + tab1.value + " " + "Hex2: " + tab2.value;
}

function ranCol() {
    let ranDig1 = Math.floor(Math.random()* 254 + 1);
	let ranDig2 = Math.floor(Math.random()* 254 + 1);
	let ranDig3 = Math.floor(Math.random()* 254 + 1);
	let newColor = ("rgb(" + ranDig1 + ", " + ranDig2 + ", " + ranDig3 + ")");
	return newColor;
}

function testIT(){
	body.style.background = "linear-gradient(to right, " + ranCol() + "," + ranCol();
	css.textContent = window.getComputedStyle( document.body ,null).getPropertyValue('background-image') 

}


// let firstInd = findIT.indexOf("rgb");
// let lastInd = findIT.lastIndexOf("rgb");
// let extColor1 = findIT.slice(firstInd, firstInd + 18);
// let extColor2 = findIT.slice(lastInd, lastInd + 18);

randKeyBtn.addEventListener("click", testIT);
tab1.addEventListener("input", setGradient);

tab2.addEventListener("input", setGradient);