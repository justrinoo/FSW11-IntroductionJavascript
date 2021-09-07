const matematika = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const Ipa = 69;

const niilaiRataRata = (matematika + bahasaIndonesia + bahasaInggris + Ipa) / 4;
// console.log(niilaiRataRata);

if (niilaiRataRata >= 90 && niilaiRataRata <= 100) {
	console.log(`Rata-rata = ${niilaiRataRata}`);
	console.log(`Grade = A`);
} else if (niilaiRataRata >= 80 && niilaiRataRata <= 89) {
	console.log(`Rata-rata = ${niilaiRataRata}`);
	console.log(`Grade = B`);
} else if (niilaiRataRata >= 70 && niilaiRataRata <= 79) {
	console.log(`Rata-rata = ${niilaiRataRata}`);
	console.log(`Grade = C`);
} else if (niilaiRataRata >= 60 && hitungRataRata <= 69) {
	console.log(`Rata-rata = ${niilaiRataRata}`);
	console.log(`Grade = D`);
} else {
	console.log(`Rata-rata = ${niilaiRataRata}`);
	console.log(`Grade = E`);
}
