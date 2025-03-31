//your JS code here. If required.
function removeColor(){
	let selectElement = document.getElementById("colorSelect");
	let selectIndex = selectElement.selectIndex;
	if(selectIndex !== -1){
		selectElement.remove(selectIndex);
	}
}
document.getElementById('colorSelect').addEventListener('click',removeColor);