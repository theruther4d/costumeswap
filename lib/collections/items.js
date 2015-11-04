Items = new Mongo.Collection( 'items' );

Items.remove({});

Items.insert( {
	title: "Slutty Batman",
	description: "It comes with abs, bro.",
	gender: "Male",
	size: "XL",
	traded: false
});

Items.insert( {
	title: "Candy Corn",
	description: "2 Words: COMPLETE. COVERAGE.",
	gender: "Female",
	size: "S",
	traded: false
});

Items.insert( {
	title: "Spiderman",
	description: "More than just your spidey senses will be tingling",
	gender: "Male",
	size: "L",
	traded: false
});