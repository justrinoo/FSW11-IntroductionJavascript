const name = [
	"Abigail",
	"Alexandra",
	"Alison",
	"Amanda",
	"Angela",
	"Bella",
	"Carol",
	"Caroline",
	"Carolyn",
	"Deirdre",
	"Diana",
	"Elizabeth",
	"Ella",
	"Faith",
	"Olivia",
	"Penelope",
];

function searchName(input, limit, callback) {
	let foundName = name.filter(function (value) {
		return value.toLowerCase().includes(input.slice(0, limit));
	});

	if (limit <= 3) {
		foundName.splice(limit);
	} else {
		foundName = null;
		callback("Maaf data hanya bisa 3");
	}
	return foundName;
}

function messageLimit(message) {
	console.log(message);
}

console.log(searchName("an", 3, messageLimit));

// const testName = name.filter((value) => value === "Olivia");
// const changeStr = testName;
// const values = changeStr.map((value) =>
// 	value.length - 5 ? value.toString().toLowerCase() : " "
// );

// console.log(values);
