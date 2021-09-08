const inputNum = 5;

if (typeof inputNum === "number") {
	for (let i = inputNum; i >= 1; i--) {
		let result = "";
		for (let j = 1; j <= i; j++) {
			result += j;
		}
		console.log(result);
	}
} else {
	console.log("Data harus number");
}
