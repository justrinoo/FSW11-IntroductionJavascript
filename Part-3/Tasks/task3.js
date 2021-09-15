// 1. Cek Tahun kelahiran
const bulan = [
	"Januari",
	"Februari",
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

const cekTanggalUlangTahun = (inputTanggal, inputBulan) =>
	new Promise((resolve, reject) => {
		const cariBulan = bulan.filter((value) =>
			value.toLocaleLowerCase().includes(inputBulan)
		);

		const tahunSekarang = new Date(Date.now()).getFullYear();
		const tanggalTahun = tahunSekarang - inputTanggal;
		if (typeof inputTanggal !== "number") {
			reject("Tanggal Harus berupa angka...");
		}

		resolve(`${inputTanggal} ${cariBulan} ${tanggalTahun}`);
	});

cekTanggalUlangTahun(23, ["maret"])
	.then((value) => console.log(value))
	.catch((err) => console.log(err));

// 2. My Activity
const activities = [
	{
		pagi: ["Mandi", "Sarapan", "Baca Buku", "Zoom Meet"],
	},
	{
		siang: ["Rest", "Makan", "Zoom Meet", "Review Materi"],
	},
	{
		sore: ["Rest", "Mandi", "Makan", "Code"],
	},
	{
		malam: ["Anime", "Baca Buku", "Sleep"],
	},
];

const myActivity = (nama, waktu) =>
	new Promise((resolve, reject) => {
		return activities.map((values) => {
			if (waktu === "pagi" && values.pagi) {
				resolve(
					`Halo ${nama} selamat ${waktu}, ini kegiatanmu adalah ${values.pagi}!`
				);
			} else if (waktu === "siang" && values.siang) {
				resolve(
					`Halo ${nama} selamat ${waktu}, ini kegiatanmu adalah ${values.siang}!`
				);
			} else if (waktu === "sore" && values.sore) {
				resolve(
					`Halo ${nama} selamat ${waktu}, ini kegiatanmu adalah ${values.sore}!`
				);
			} else if (waktu === "malam" && values.malam) {
				resolve(
					`Halo ${nama} selamat ${waktu}, ini kegiatanmu adalah ${values.malam}!`
				);
			}
		});
	});

siang = myActivity("Rino", "malam");
siang.then((result) => console.log(result));
