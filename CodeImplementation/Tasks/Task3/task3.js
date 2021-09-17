function arkFood(harga, voucher, jarak, pajak) {
	// menghitung harga - voucher
	// ex: 75.000
	const minArkFood = 50000;
	const minTraktirDemy = 25000;

	let kilometer = 2;
	let tarifPertama = 5000;
	let tarifSelanjutnya = 3000;
	let sisaKilometer = jarak - kilometer;
	let totalTarif = sisaKilometer * tarifSelanjutnya;
	let totalHargaOngkir = totalTarif + tarifPertama;
	const totalPajak = pajak === true ? harga * (5 / 100) : 0;

	if (voucher === "ARKAFOOD5" && harga >= minArkFood) {
		const hargaDiskon = (harga * 50) / 100 > 50000 ? 50000 : (harga * 50) / 100;
		// dsni di itung bersama jarak ongkir + pajaknya
		const subTotal = harga - hargaDiskon + totalHargaOngkir + totalPajak;

		const maxPotongan = 50000;
		// harga diatas diskon
		if (subTotal > maxPotongan) {
			return `Harga : ${harga}\nPotongan : ${hargaDiskon}\nBiaya Antar : ${totalHargaOngkir}\npajak : ${totalPajak}\nSubTotal :${subTotal}`;
		}
		// harga dibawah diskon
		return `Harga : ${harga}\nPotongan : ${hargaDiskon}\nBiaya Antar : ${totalHargaOngkir}\npajak : ${totalPajak}\nSubTotal :${subTotal}`;
	} else if (voucher === "DITRAKTIRDEMY" && harga >= minTraktirDemy) {
		const hargaDiskon = (harga * 60) / 100 > 30000 ? 30000 : (harga * 60) / 100;
		// dsni di itung bersama jarak ongkir + pajaknya
		const subTotal = harga - hargaDiskon + totalHargaOngkir + totalPajak;
		const maxPotongan = 30000;
		// harga diatas diskon
		if (subTotal > maxPotongan) {
			return `Harga : ${harga}\nPotongan : ${hargaDiskon}\nBiaya Antar : ${totalHargaOngkir}\npajak : ${totalPajak}\nSubTotal :${subTotal}`;
		}
		// harga dibawah diskon
		return `Harga : ${harga}\nPotongan : ${hargaDiskon}\nBiaya Antar : ${totalHargaOngkir}\npajak : ${totalPajak}\nSubTotal :${subTotal}`;
	} else if (voucher !== "ARKAFOOD5" && "DITRAKTIRDEMY") {
		// diskonnya di reset jadi = 0
		const hargaDiskon = 0;
		// dsni di itung bersama jarak ongkir + pajaknya
		const subTotal = harga + totalPajak + totalHargaOngkir;
		return `Harga : ${harga}\nPotongan : ${hargaDiskon}\nBiaya Antar : ${totalHargaOngkir}\npajak : ${totalPajak}\nSubTotal :${subTotal}`;
	}
}

console.log(arkFood(100000, "DITRAKTIRDEMY", 5, true));
