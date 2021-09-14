const cekHariKerja = (day) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
			let cek = dataDay.find((item) => {
				return item === day;
			});
			if (cek) {
				resolve(cek);
			} else {
				reject(new Error("Hari ini bukan hari kerja"));
			}
		}, 3000);
	});
};

// Then&Catch
const senin = cekHariKerja("minggu");
senin
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.log(error.message));

// Async / Await
const prosesHari = async () => {
	try {
		const senin = await cekHariKerja("minggu");
		console.log(senin);
	} catch (error) {
		console.log(error.message);
	}
};
prosesHari();

/**
 *  Handling Error
 *   Then&Catch
 * - Then ketika proses si promise itu state(kondisi)nya fullfield atau terpenuhi dan callback resolve yang terpanggil
 * - Catch ketika proses si promise itu state(kondisi)nya berbentuk rejected atau gagal dan callback reject yang terpanggil
 *
 * Try&Catch
 * - try => ketika proses si asynchronous nya itu terpenuhi
 * - Catch => ketika si proses asynchronous nya itu tidak terpenuhi
 */
