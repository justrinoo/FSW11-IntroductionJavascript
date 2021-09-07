const printSegitiga = 5;
let temp = "";
for (let i = 1; i <= printSegitiga; i++) {
	for (let x = 1; x <= printSegitiga - i + 1; x++) {
		temp += x;
	}
	temp += "\n";
}

console.log(temp);
