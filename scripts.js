const [red, blue, yellow, green] = [...document.getElementsByClassName("box")];
const colors = [red, blue, yellow, green];
console.log(colors);
colors.forEach(button => {
	console.log(button);
	button.addEventListener("click", () => {
		const color = button.style.backgroundColor;
		button.style.filter = "saturate(50%)";
		setTimeout(() => {
			button.style.filter = "saturate(100%)";
		}, 300);
	});
});
