const inputPalindrom = "kakak";
const arrPalindrom = [...inputPalindrom];
const prosesPalindrom = arrPalindrom.reverse().join("");
if (
	prosesPalindrom === inputPalindrom &&
	arrPalindrom.length > 0 &&
	inputPalindrom !== " "
) {
	console.log("palindrom");
} else if (inputPalindrom === " ") {
	console.log("silahkan masukan input palindrom...");
} else {
	console.log("bukan palindrom");
}
