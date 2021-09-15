const getMounth = (callback) => {
	setTimeout(() => {
		let error = false;
		let month = [
			"January",
			"February",
			"Maret",
			"April",
			"Mei",
			"Juni",
			"Juli",
			"Agustus",
			"September",
			"Oktober",
			"November",
			"Desember",
		];
		if (!error) {
			callback(null, month);
		} else {
			callback(new Error("Sorry Data Not Found"), []);
		}
	}, 4000);
};

getMounth((type, month) => {
	let error = false;
	let temp;
	if (!error) {
		console.log(type);
		month.map((value) => {
			console.log(value);
		});
	} else {
		[temp, month] = [month, temp];
		temp = [];
		console.log(type.message);
		console.log(temp);
	}
});
