const createCount = () => {
	let count = 0;

	return {
		increment() {
			count++;
		},
		decrement() {
			count--;
		},
		get() {
			return count;
		},
	};
};

const counter = createCount();
counter.increment();
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.get());

// Add
const createAdder = (a) => {
	return (b) => {
		return a + b;
	};
};

const add10 = createAdder(10);
console.log(add10(-5));
console.log(add10(7));

const add100 = createAdder(100);
console.log(add100(400));
console.log(add100(-400));

// Tipper
const createTipper = (baseTip) => {
	return (amount) => {
		return baseTip * amount;
	};
};

const tip20 = createTipper(0.2);
const tip30 = createTipper(0.3);
console.log(tip20(100));
console.log(tip30(100));
