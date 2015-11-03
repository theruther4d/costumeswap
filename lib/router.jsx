var admin = FlowRouter.group({
	prefix: '/admin'
});

admin.route( '/', {
	action: function() {
		ReactLayout.render( MainLayout, {
			content: <AdminArea />
		});
	}
});