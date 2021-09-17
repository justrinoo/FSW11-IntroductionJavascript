function divideAndSort(angka) {
	const num = angka.toString().split(0);
	const devideNum = [...num].map((value) => value);
	// const results = devideNum.join('');
	const idx1 = devideNum[0].split("").sort().join("");
	const idx2 = devideNum[1].split("").sort().join("");
	const idx3 = devideNum[2].split("").sort().join("");
	const results = `${idx1}${idx2}${idx3}`;
	return results;
}
console.log(divideAndSort(5956560159466056));
