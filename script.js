//your JS code here. If required.
function removeColor(){
	let selectElement = document.getElementById("colorSelect");
	if(selectElement.selectIndex !== -1){
		selectElement.remove(selectElement.selectIndex);
	}
}
document.getElementById('colorSelect').addEventListener('click',removeColor);