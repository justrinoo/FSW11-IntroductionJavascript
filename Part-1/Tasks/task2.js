const matematika = 100;
const bahasaIndonesia = 100;
const bahasaInggris = 100;
const ipa = 100;

const niilaiRataRata = (matematika + bahasaIndonesia + bahasaInggris + ipa) / 4;
console.log(niilaiRataRata);
const listGrade = ["A", "B", "C", "D", "E"];

if (niilaiRataRata || (niilaiRataRata >= 0 && niilaiRataRata <= 100)) {
	// atau mengecek dengan nilaiRataRata === 0 jika nilainya itu adalah 0
	if (niilaiRataRata >= 90 && niilaiRataRata <= 100) {
		console.log(`Rata-rata = ${niilaiRataRata}`);
		console.log(`Grade = ${listGrade[0]}`);
	} else if (niilaiRataRata >= 80 && niilaiRataRata <= 89) {
		console.log(`Rata-rata = ${niilaiRataRata}`);
		console.log(`Grade = ${listGrade[1]}`);
	} else if (niilaiRataRata >= 70 && niilaiRataRata <= 79) {
		console.log(`Rata-rata = ${niilaiRataRata}`);
		console.log(`Grade = ${listGrade[2]}`);
	} else if (niilaiRataRata >= 60 && niilaiRataRata <= 69) {
		console.log(`Rata-rata = ${niilaiRataRata}`);
		console.log(`Grade = ${listGrade[3]}`);
	} else if (niilaiRataRata > 100) {
		console.log("wah, nilai anda melampui batas nilai anda A+");
	} else {
		console.log(`Rata-rata = ${niilaiRataRata}`);
		console.log(`Grade = ${listGrade[4]}`);
	}
} else {
	console.log("Nilai Harus Di Isi....");
}
