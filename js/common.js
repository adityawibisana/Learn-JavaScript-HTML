function changeDesc(txt) {
	document.getElementById("desc").innerHTML = txt;
}

let currentLevel = 40;
function switchTo(imgSrc, level) {
	document.getElementById("main_image").src = imgSrc;	 
	document.getElementById("pembesaran" + currentLevel).style.visibility = "hidden"; 
	currentLevel = level;
	update();
}

function back() {
	switch(currentLevel) {
		case 200: 
			switchTo("images/ayah-syam.jpg", 40);
			break;
		case 400:
			switchTo("images/ayah-syam.jpg", 200);
			break;
		default:
			switchTo("images/ayah-syam.jpg", 40);
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

	document.getElementById("pembesaran" + currentLevel).style.visibility = "visible"; 
}