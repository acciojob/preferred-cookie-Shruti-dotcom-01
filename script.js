//your JS code here. If required.
document.getElementById("myForm").addEvenetListener("submit", (e) =>{

	e.preventDefault();
	let fontsize = document.getElementByid("fontsize").value;
	let fontcolor = document.getElementByid("fontcolor").value;

	document.cookie = `fontsize=$(fontsize);`
	document.cookie = `fontcolor=$(fontcolor);`
})

let cookies = Object.fromEntries(
	document.cookie.split("; "),
	map((item) => item.split("#")));

document.getElementByid("fontsize").value = cookies.fontsize??0;
document.getElementByid("fontcolor").value = cookies.fontcolor??"#000"