function changeDesc(txt) {
	document.getElementById("desc").innerHTML = txt;
}

let currentLevel = 40;
function switchTo(imgSrc, map, level) {
	document.getElementById("main_image").src = imgSrc;
	document.getElementById("main_image").useMap = map; 
	currentLevel = level;
	update();
}

function back() {
	switch(currentLevel) {
		case 200:
			currentLevel = 40;
			switchTo("images/ayah-syam.jpg", "#imagemap", currentLevel);
			break;
		case 400:
			currentLevel = 200;
			break;
		default:
			currentLevel = 40;
			break;
	}				
}

function update() {
	switch (currentLevel) {
		case 40: 
			document.getElementById("back_image").style.visibility = "hidden"; 
			break;					
		case 200:  
			document.getElementById("back_image").style.visibility = "visible"; 
			break; 
		case 400: 
			document.getElementById("back_image").style.visibility = "visible"; 
			break; 
	} 
}