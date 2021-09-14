// using promise
const getDataName = () => {
	// default fetch = promise
	const data = fetch("https://jsonplaceholder.typicode.com/users");
	// pending => result response
	return data
		.then((response) => response.json())
		.then((results) => {
			const getName = results.map((value) => console.log(value.name));
			return getName;
		});
};

getDataName();
