//your JS code here. If required.
document.getElementById("myForm").addEventListener("submit", (e) =>{

	e.preventDefault();
	let fontsize = document.getElementById("fontsize").value;
	let fontcolor = document.getElementById("fontcolor").value;

	document.cookie = `fontsize=${fontsize};`
	document.cookie = `fontcolor=${fontcolor};`
})

let cookies = Object.fromEntries(
	document.cookie.split("; ").
	map((item) => item.split("=")));

document.getElementById("fontsize").value = cookies.fontsize ?? 0;
document.getElementById("fontcolor").value = cookies.fontcolor ?? "#000";