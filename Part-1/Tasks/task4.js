let data = {
	id: 1,
	name: "Leanne Graham",
	username: "Bret",
	email: "Sincere@april.biz",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
};
// A.
// cara pertama
const defaultData = data;
const newObj = {
	...defaultData,
	name: "Rino Satya Putra",
	email: "rinosatyaputra.id@gmail.com",
	hobby: "Solving Problem",
};
// cara kedua
// const newName = (newObj.name = "Rino Satya Putra");
// const newEmail = (newObj.email = "rinosatyaputra.id@gmail.com");
// const newHobby = (newObj.hoby = "Solving Problem");

console.log(newObj);

// B.
const { address } = data; // data.address not => {}
const { street, city } = address;
// const { street, city } = data.address; // data.address not => {}
// console.log(street);
// console.log(city);
