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

	if (limit > 0) {
		foundName.splice(limit);
	} else {
		foundName = null;
		callback("Maaf data harus lebih dari 0");
	}

	return foundName;
}

function messageLimit(message) {
	console.log(message);
}

console.log(searchName("an", 5, messageLimit));
