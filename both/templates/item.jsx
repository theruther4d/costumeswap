Item = React.createClass({
	render() {
		return (
			<li className='task'>{this.props.item.title}</li>
		);
	}
});