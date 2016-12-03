app.config(function ($routeProvider) {
    $routeProvider
	.when("/", {
	    templateUrl: "Home.html",
	    controller: "home-ctrl"
	})
	.when("/post1", {
	    templateUrl: "Post1.html",
	    controller: "post1-ctrl"
	})
	.when("/post2", {
	    templateUrl: "Post2.html",
	    controller: "post2-ctrl"
	})
	.when("/post3", {
	    templateUrl: "Post3.html",
	    controller: "post3-ctrl"
	})
    .when("/about-me", {
        templateUrl: "AboutMe.html",
        controller: "about-ctrl"
    })
    .when("/poems", {
        templateUrl: "Poems.html",
        controller: "poems-ctrl"
    })
	.otherwise({
	    redirectTo: "/"
	});
});