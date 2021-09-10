function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
	// return dataArray;
	if (dataArray.length >= 5) {
		if (nilaiAwal < nilaiAkhir) {
			const result = dataArray.filter((value) => {
				if (value >= nilaiAwal && value <= nilaiAkhir) {
					return value;
				}
			});
			// console.log(typeof result)
			if (result.length > 0) {
				return result.sort(function (a, b) {
					return a - b;
				});
			} else {
				return "Nilai tidak ditemukan";
			}
		} else if (nilaiAwal >= nilaiAkhir) {
			return "Nilai akhir harus lebih besar dari nilai awal";
		}
	} else {
		return "Jumlah angka dalam dataArray harus lebih dari 5";
	}
}
console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
