// Build Function Array
// 1. push() untuk menambahkan element array ke akhir
// contoh:
const exArr = [1, 2, 3, 4];
exArr.push(5);
console.log(exArr);

// 2. reduce() untuk mengembalikan jumlah element pada array
// contoh:
const arrReduce = [18, 20, 30, 50, 60];
const hasil = arrReduce.reduce(
	(currentValue, Accumulator) => currentValue + Accumulator
);
console.log(hasil);

// Build Function Object
// 3. toString() untuk mengembalikan nilai bertipe string dari tipe data object
// contoh:
const newObj = {
	tanggalSekarang: 10,
	text: "nama saya adalah lionel messi",
};
console.log(newObj.tanggalSekarang.toString());

// 4. replace() untuk mereplace data baru dalam bentuk string dan mencocokannya dengan valuenya
// contoh:
console.log(newObj.text.replace("lionel messi", "Rino Satya Putra"));

// Build Function String
// 6. toUpperCase() untuk mengubah element atau teks menjadi kapital atau huruf besar semua
// contoh:
const myName = "rIno sAtYa Putra";
console.log(myName.toUpperCase());

// Build Function Array
// 6. concat() untuk menambahkan element yang lebih dari dua, dalam bentuk string
// contoh:
const data1 = ["HTML", "CSS"];
const data2 = ["Javascript", "PHP"];
const results = data1.concat(data2);
console.log(results);

// 7. map() looping array untuk memecah atau memotong sebuah element array, dan hasil map adalah sebuah string
// contoh:
results.map((value, index) => {
	console.log(`${value} adalah index ke ${index + 1}`);
});

// 8. sort() untuk mengurutkan element dari nilai terkecil atau nilai terbesar
// contoh:
const num = [3, 2, 1];
console.log(num.sort()); // ascending

// 9. filter() untuk memilih atau mendefiniskan kondisi tertentu
// contoh:
const bilangan = [90, 10, 30, 50, 60, 40];
const hasilBilangan = bilangan.filter((value) => value >= 30);
console.log(hasilBilangan);

// 10. pop() untuk memotong atau menghapus element terakhir pada array
// contoh:
const vegetables = ["Banana", "Apple", "Orange", "Kiwi"];
const potongBuah = vegetables.pop();
console.log(vegetables);
console.log(potongBuah);
