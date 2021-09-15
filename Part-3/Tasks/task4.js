// using promise
const getDataName = () => {
	// default fetch = promise
	const users = fetch("https://jsonplaceholder.typicode.com/users");
	// pending => result response
	return users
		.then((response) => response.json())
		.then((results) => results.map((value) => console.log(value.name)));
};

getDataName();
