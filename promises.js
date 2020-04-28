// Callback
const getCallbackData = (num, callback) => {
	setTimeout(() => {
		if (typeof num === 'number') {
			callback(undefined, num * 2);
		} else {
			callback('Num must be a number!');
		}
	}, 1000);
};

getCallbackData(2, (err, data) => {
	if (err) {
		console.log(err);
	} else {
		getCallbackData(data, (err, data) => {
			if (err) {
				console.log('err');
			} else {
				console.log(data);
			}
		});
	}
});

// Promise
const getPromiseData = (num) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			typeof num === 'number'
				? resolve(num * 2)
				: reject('Num must be a number!');
		}, 1000);
	});

getPromiseData(2).then(
	(data) => {
		getPromiseData(data).then(
			(data) => {
				console.log(`Promise data: ${data}`);
			},
			(err) => {
				console.log(`Error: ${err}`);
			}
		);
	},
	(err) => {
		console.log(err);
	}
);

getPromiseData(10)
	.then((data) => {
		return getPromiseData(data);
	})
	.then((data) => {
		return 'This is a test';
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});
