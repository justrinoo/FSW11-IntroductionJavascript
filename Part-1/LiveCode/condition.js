// IF ELSEIF ELSE
// TRUTH => true | 1 | selain angka 0
// FALSY => false | 0 | null | undefined | " " | NAN
// const condition = NaN;
// if (condition) {
// 	console.log(true);
// } else {
// 	console.log(false);
// }

// SWITCH CASE
const phone = "BLACKBERRY";

switch (phone) {
	case "ANDROID":
		console.log("YOUR PHONE IS ANDROID");
		break;
	case "IPHONE":
		console.log("YOUR PHONE IS IPHONE");
		break;
	default:
		console.log("YOUR PHONE IS NOT LISTED!");
		break;
}

const harga = 10000;
if (harga > 10000) {
	console.log("Mahal");
} else {
	console.log("Murah");
}

harga > 10000
	? console.log("Mahal")
	: harga > 5000
	? console.log("Sedang")
	: harga < 3000
	? console.log("Lumayan")
	: console.log("Murah");

const name = "Rino";

if (name) {
	console.log(name);
} else {
	console.log("Anonymous");
}

const checkUsername = name || 1 || 0 || null || "Anonymous";
