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
	return !type
		? month.map((value) => {
				console.log(value);
		  })
		: console.log(type.message);
});
