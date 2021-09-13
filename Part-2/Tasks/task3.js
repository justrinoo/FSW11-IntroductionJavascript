function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
	if (dataArray.length >= 5) {
		if (nilaiAwal < nilaiAkhir) {
			const result = dataArray.filter((value) =>
				value >= nilaiAwal && value <= nilaiAkhir ? value : null
			);
			if (result.length > 0) {
				return result.sort(function (angkaPertama, angkaAkhir) {
					return angkaPertama - angkaAkhir;
				});
			} else {
				return "Nilai tidak ditemukan";
			}
		} else if (nilaiAwal > nilaiAkhir) {
			return "Nilai akhir harus lebih besar dari nilai awal";
		} else {
			return "Nilai Awal Harus Lebih Dari 5...";
		}
	} else {
		return "Jumlah angka dalam dataArray harus lebih dari 5";
	}
}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
