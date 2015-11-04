Item = React.createClass({
	render() {
		return (
			<article className='item'>
				<div className='item__image-wrapper'>
					<img className='item__image' src={this.props.item.image} />
				</div>
				<h4 className='item__title'>{this.props.item.title}</h4>
				<p className='item__description'>{this.props.item.description}</p>
			</article>
		);
	}
});