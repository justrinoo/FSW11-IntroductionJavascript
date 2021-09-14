const vegetables = [
	{
		nama: "rino",
	},
	{
		nama: "satya",
	},
	{
		nama: "putra",
	},
];

function cetakBuah() {
	return vegetables.map((values) => console.log(values.nama));
}
cetakBuah();
