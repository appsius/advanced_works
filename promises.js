// Callback
const getCallbackData = (callback) => {
	setTimeout(() => {
		callback('The callback is NOT fine..', undefined);
		callback('The callback is NOT fine..', undefined);
	}, 1000);
};

getCallbackData((err, data) => {
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
});

// Promise
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('The promise is NOT fine...');
		reject('The promise is NOT fine...');
	}, 1000);
});

myPromise.then(
	(data) => {
		console.log(data);
	},
	(err) => {
		console.log(err);
	}
);

myPromise.then(
	(data) => {
		console.log(data);
	},
	(err) => {
		console.log(err);
	}
);
