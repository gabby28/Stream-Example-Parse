App.PeopleRoute = Ember.Route.extend({
	model : function(params) {
		q = new Parse.Query(Parse.User);
		q.limit(100);
		var promise = q.find(function(users) {
			return users;
		});
		return promise;
	}
}); 