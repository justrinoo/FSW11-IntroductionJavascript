const inputWords = "Saya belajar Javascript";
const changeWords = inputWords.split(" ").reverse().join(" ");
return changeWords.length > 0 && inputWords !== " "
	? console.log(changeWords)
	: console.log("Silahkan masukan input kalimat...");
