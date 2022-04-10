function selectGroupElement(elm){
	let group = elm.getAttribute("data-group");
	let prev = document.querySelectorAll(`[data-group="${group}"][data-selected="${1}"]`)[0];
    prev.setAttribute("data-selected", "0");
    elm.setAttribute("data-selected", "1");
    console.log("clicked in group: "+group);
}