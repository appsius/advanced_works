const people = [
	{
		name: 'Ilo',
		age: 23,
	},
	{
		name: 'Hilo',
		age: 22,
	},
	{
		name: 'Sülo',
		age: 43,
	},
];

const personsName = people.find((person) => person.age === 22);

console.log(personsName.name);
