Items = new Mongo.Collection( 'items' );

if( !Items.find({}).count() ) {
	Items.insert( {
		title: "Slutty Batman",
		description: "It comes with abs, bro.",
		gender: "Male",
		size: "XL",
		traded: false
	});
}