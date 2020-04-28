const getPromiseData = (num) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			typeof num === 'number'
				? resolve(num * 2)
				: reject('Num must be a number!');
		}, 1000);
	});

const processData = async () => {
	let data = await getPromiseData(3);
	data = await getPromiseData(data);
	data = await getPromiseData(data);
	return data;
};

processData()
	.then((data) => {
		console.log('Data', data);
	})
	.catch((error) => {
		console.log(('Error:', error));
	});
