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
	triggersEnter: [function( context, redirect ) {
		if( Meteor.loggingIn() || Meteor.userId() ) {
			console.log( 'access granted' );
		} else {
			FlowRouter.go( 'home' );
		}

	}],
	action: function() {
		ReactLayout.render( MainLayout, {
			content: <AdminArea />
		});
	}
});