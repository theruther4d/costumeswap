Feed = React.createClass({
	mixins: [ReactMeteorData],

	// Loads items from the Items collection
	// and puts them on this.data.items:
	getMeteorData() {
		return {
			items: Items.find( { traded: { $ne: true } } ).fetch()
		};
	},

	renderItems() {
		// Get items from this.data.items
		return this.data.items.map( ( item ) => {
			return <Item key={item._id} item={item} />;
		});
	},

	render() {
		return (
			<div>
				<h1>This is the feed</h1>
				<ul>
					{ this.renderItems() }
				</ul>
			</div>
		);
	}
});