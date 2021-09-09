const prtinSegitiga = 5;

if (typeof prtinSegitiga === "number") {
	for (let i = prtinSegitiga; i >= 1; i--) {
		let result = "";
		for (let j = 1; j <= i; j++) {
			result += j;
		}
		console.log(result);
	}
} else {
	console.log("Data harus number");
}
