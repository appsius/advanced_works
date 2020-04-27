const getTips = (amount) => {
	if (typeof amount === 'number') {
		return amount * 0.25;
	} else {
		throw Error('Argument must be number...');
	}
};

try {
	const result = getTips(100);
	console.log(result);
} catch (e) {
	console.log('Catch block is running!');
}
