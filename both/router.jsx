var admin = FlowRouter.group({
	prefix: '/admin'
});

FlowRouter.route( '/', {
	name: 'home',
	action: function() {
		ReactLayout.render( MainLayout, {
			content: <Feed />
		});
	}
})

admin.route( '/', {
	action: function() {
		ReactLayout.render( MainLayout, {
			content: <AdminArea />
		});
	}
});