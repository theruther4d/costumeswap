Items = new Mongo.Collection( 'items' );

Items.remove({});

Items.insert( {
	image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTgsN_IXHF8yxaV8wIUb17PvOsO0dL2ZL71bJDZLOQR-A9zv9_oLicT1ps8oW8hxpBnaLzYrhQ&usqp=CAE',
	title: "Slutty Batman",
	description: "It comes with abs, bro.",
	gender: "Male",
	size: "XL",
	traded: false,
	owner: "AfCHjRwY35LPESYFf"
});

Items.insert( {
	image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxH0F2NptGErteRrBrEj3f-Z8X1guTNn8Ar6a2Wed_UZSVY87FrIANK51SHeOt4CPiKfhCuxB5&usqp=CAE',
	title: "Candy Corn",
	description: "2 Words: COMPLETE. COVERAGE.",
	gender: "Female",
	size: "S",
	traded: false,
	owner: "AfCHjRwY35LPESYFf"
});

Items.insert( {
	image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtWPuKk6kDqGc1uLgyEzsjSEpdjhlak6z3uqQvKtrBEQZZKjGTR2abjtiChDB1P-KZ25PM1n0&usqp=CAE',
	title: "Spiderman",
	description: "More than just your spidey senses will be tingling",
	gender: "Male",
	size: "L",
	traded: false,
	owner: "AfCHjRwY35LPESYFf"
});