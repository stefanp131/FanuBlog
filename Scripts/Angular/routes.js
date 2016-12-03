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
	.when("/post4", {
	    templateUrl: "Post4.html",
	    controller: "post4-ctrl"
	})
	.when("/post5", {
	    templateUrl: "Post5.html",
	    controller: "post5-ctrl"
	})
	.when("/post6", {
	    templateUrl: "Post6.html",
	    controller: "post6-ctrl"
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