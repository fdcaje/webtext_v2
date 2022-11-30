// resolving problem

const resizableContainers = document.querySelectorAll("#resizable");
const resizeControl = document.querySelectorAll("#column_resize_control");

const getPosition = (e) => {
	e.preventDefault();
    // console.log(e)
    // return
	const parentWidth = e.target.parentElement.parentElement.parentElement.scrollWidth;
	let a, b, cc;
	cc = parentWidth - Math.abs(e.offsetX);
	a = cc;
	b = parentWidth - a;
	let res = [Math.abs(a), Math.abs(b)];
	return res;
};

const setPosition = (pos, e) => {
	document.documentElement.style.setProperty("--col-a-basis", `${pos(e)[0]}px`);
	document.documentElement.style.setProperty("--col-b-basis", `${pos(e)[1]}px`);
};

resizeControl[0].addEventListener("drag", (e) => setPosition(getPosition, e), false);
// resizeControl[0].addEventListener("dragend", (e) => setPosition(getPosition, e), false);
// resizeControl[0].addEventListener(
// 	"dragend",
// 	(e) => {
// 		e.preventDefault();
// 		const parentWidth = e.target.parentElement.parentElement.parentElement.scrollWidth;
// 		document.documentElement.style.setProperty("--col-a-basis", `${Math.ciel(e.offsetX / parentWidth) * 100}%`);
// 	},
// 	false
// );
