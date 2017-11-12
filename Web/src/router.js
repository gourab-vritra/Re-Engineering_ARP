app.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            controllerAs: 'home',
            templateUrl: '/app/templates/home.html'
        })
        .when('/article',{
            templateUrl: '/app/templates/article.html'
        })
        .when('/about',{
            templateUrl: '/app/templates/about.html'
        })
        .when('/contact',{
            templateUrl: '/app/templates/contact.html'
        })
        .when('/latest',{
            controller: 'HomeController',
            controllerAs: 'home',
            templateUrl: '/app/templates/latest.html'
        })
        .when('/archive',{
            controller: 'ArchiveController',
            controllerAs: 'archiveP',
            templateUrl: '/app/templates/archive.html'
        })
        .when('/login',{
            templateUrl: '/app/templates/login.html'
        })
        .when('/signup',{
            templateUrl: '/app/templates/signup.html'
        })
       .when('/admin',{
            //controller: 'LoginController',
            //controllerAs: 'archiveP',
            templateUrl: '/app/templates/admin.html'
            //templateUrl: 'adminhome.html'
        })
        .when('/newblog', {
            controller: 'TextEditorController',
            controllerAs: 'editor',
            templateUrl: '/app/templates/createBlog.html'
        });
    
    $locationProvider.html5Mode(true);      //activate HTML5 mode for pretty URL
}]);