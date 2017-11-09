function changeDesc(txt) {
	document.getElementById("desc").innerHTML = txt;
}
function showMessage(txt) {
	alert(txt);
}
function changeImageSrc(id, src) {
	document.getElementById(id).src = src;
}
function showDetail() {
	document.getElementById("main_container").style.display = "none";
	document.getElementById("detail_container").style.display = "block";
}
function showImageDetail(src) {
	showDetail();
	changeImageSrc("detail_image", src);
} 
function showMain() {
	document.getElementById("main_container").style.display = "block";
	document.getElementById("detail_container").style.display = "none";
}