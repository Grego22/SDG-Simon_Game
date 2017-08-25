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

const colors = ["red", "blue", "yellow", "green"];

const sequence = Arry.from({ length: 20 }, (v, k) => {
	return colorsString[Math.floor(Math.random() * 4)];
});

const start = document.querySelector("button")[0];
const state = {
	count: 0
};

start.addEventListener("click", () => {
	state.count = 1;

	Array.from({ length: state.count }, (v, k) => {
		new Promise(res => {
			setTimeout(() => {
				`${sequence[k]}`.style.filter;
			});
		});
	});
});
