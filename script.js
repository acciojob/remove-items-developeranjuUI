//your JS code here. If required.
function removeColor(){
	let selectElement = document.getElementById("colorSelect");
	let selectoptions = selectElement.options[selectElement.selectIndex];
	if(selectoptions){
		selectoptions.remove();
	}
}
document.getElementById('colorSelect').addEventListener('click',removeColor);