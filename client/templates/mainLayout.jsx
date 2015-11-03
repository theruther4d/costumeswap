MainLayout = React.createClass({
	render() {
		return (
			<div>
				<h1>Admin:</h1>
				<main>{this.props.content}</main>
			</div>
		);
	}
})