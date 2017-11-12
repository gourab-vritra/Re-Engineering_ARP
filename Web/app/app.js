/* Module Declaration Start */

var app = angular.module("app",["ngRoute","textAngular"]);

/* Module Declaration End */

/* Application Routing Coding Start */

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

/* Application Routing Coding End */

/* Application Service Coding start */

app.service("LatestService", function ($http) {
    this.getPosts = function () {
        var url = 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/blog';
        return $http.get(url).then(function (response) {
            return response.data;
        });

    }  
});

app.service("BlogDetailService",function($http,$q){
    var fac = {};
    fac.getDetails = function (Data) {
        var BlogdetailData=new Object();
        BlogdetailData.Id=Data.id;
        var defer = $q.defer();
        $http({
            url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/Blogdetail',
            //url:'http://localhost:55256/api/Blogdetail,
            method: 'POST',
            data: BlogdetailData,
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac;     
});

app.service("PostCommentService",function($http,$q){
    var fac1 = {};
    fac1.postComment = function (Data) {
        var PostCommentData=new Object();
        PostCommentData.BlogId=Data.id;
        PostCommentData.Comment=Data.txtcomment;
        var defer = $q.defer();
        $http({
            url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/PostComment',
            method: 'POST',
            data: PostCommentData,
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac1; 
});
        
app.service("ShowCommentService",function($http,$q){
 
    var fac1 = {};
    fac1.showComment = function (Data) {
        var ShowCommentData=new Object();
        ShowCommentData.BlogId=Data.id;
        var defer = $q.defer();
        $http({
            url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/ShowComment',
            method: 'POST',
            data: ShowCommentData,
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac1; 
});

app.service("ArchiveService", function ($http) {
    this.getArchivePost = function () {
        var url = 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/archive';
        return $http.get(url).then(function (response) {
            return response.data;
        });

    }  
});

app.service("RegistrationService", function ($http, $q) { 
    
    var fac = {};
    fac.SaveFormData = function (data) {
        var defer = $q.defer();
        $http({
            url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/Signup/AddUsers',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac;
});
app.service("SubscribeService",function($http,$q){
   var fac={};
    fac.SubcribeUser=function(data){
           var defer = $q.defer();
        $http({
            //url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/Subscriber/AddSubscriber',
            url:'http://localhost:55256/api/Subscriber/AddSubscriber',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac;
    }
);
app.service("LoginService", function ($http, $q) { 
    
    var fac = {};
    fac.SaveFormData = function (data) {
        var defer = $q.defer();
        $http({
            url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/Login/Userlogin',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac;
});

app.service("ContactService", function ($http, $q) { 
    
    var fac = {};
    fac.SaveFormData = function (data) {
        var defer = $q.defer();
        $http({
            url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/Contact',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac;
});

app.service("NewblogService", function ($http, $q) { 
    
    var fac = {};
    fac.SaveFormData = function (data) {
        var defer = $q.defer();
        $http({
            //url: 'http://arpdataapi-env.ap-south-1.elasticbeanstalk.com/api/Newblog/AddBlog',
            url:'http://localhost:55256/api/Newblog/AddBlog',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type' : 'application/json'}
        }).then(function (success){
            defer.resolve(success);
        },function (error){
            //alert('Error!');
            defer.reject(error);
        });
        return defer.promise;
    }
    return fac;
});



/* Application Service Coding End */


/* Application Controllers Coding Start */

app.controller('SubscriberController',['$scope','SubscribeService','$window',function($scope,SubscribeService,$window){
    $scope.submitText = "Subscribe";
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.Subscribe = {
        SubscriberEmail: ''
    };
    
    $scope.$watch('f6.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });
    $scope.SubscribeData = function (data) {
        if ($scope.submitText == 'Subscribe'){
            $scope.submitted = true;
            $scope.message = '';

            if ($scope.isFormValid){
                $scope.submitText = 'Please Wait...';
                $scope.Subscribe = data;
                SubscribeService.SubcribeUser($scope.Subscribe).then(function (d) {
                    //alert(d);
                    if (d.data.Data == 'Success') {
                        //have to clear form here
                        $scope.submitText = "Subscribed";
                        //$window.location.href = '/';
                        ClearForm();
                        
                    }
                    
                });
            }
            else {
                $scope.submitText = "Subscribe";
                $scope.message = '';
            }
        }
         function ClearForm() {
        $scope.Contact = {};
        $scope.f6.$setPristine(); //here f1 is form name
        $scope.submitted = false;
    }
}
}]);

app.controller('BlogDetailController',['$scope','$log','BlogDetailService',function($scope,$log,BlogDetailService){
    var paramsObject = {};   
    window.location.search.replace(/\?/,'').split('&').map(function(o){ paramsObject[o.split('=')[0]]= o.split('=')[1]});
         $log.log(paramsObject)
         $scope.parameters=JSON.parse(JSON.stringify(paramsObject));
     getBlogDetails();
    function getBlogDetails() {
             BlogDetailService.getDetails($scope.parameters).then(function (d) {
         $scope.post = JSON.parse(d.data.Data);
         $scope.article = $scope.post[0];
        }
    )}
    }]);


app.controller('HomeController', ['$scope', 'LatestService',function ($scope, LatestService) {
    
    this.latestData = [];
    getLatest();
    function getLatest() {
         var servCall = LatestService.getPosts();
         servCall.then(function (d) {
         $scope.posts = JSON.parse(JSON.stringify(d));
        }
    
    )}
    
}]);

app.controller('ArchiveController', ['$scope', 'ArchiveService', function ($scope, ArchiveService) {

    this.archiveData = [];
    getArchive();
    function getArchive() {
        var servCall = ArchiveService.getArchivePost();
        servCall.then(function (d) {
            $scope.archivePosts = JSON.parse(JSON.stringify(d));

        }
    )}
}]);

app.controller('RegistationController',['$scope', 'RegistrationService', '$window', function ($scope, RegistrationService, $window) {
    //Default Variable
    $scope.submitText = "Save";
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.User = {
        Username : '',
        FirstName: '',
        LastName: '',
        Password: '',
        UserEmail: ''
    };
    
    $scope.$watch('f1.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });
    $scope.SaveData = function (data) {
        if ($scope.submitText == 'Save'){
            $scope.submitted = true;
            $scope.message = '';

            if ($scope.isFormValid){
                $scope.submitText = 'Please Wait...';
                $scope.User = data;
                RegistrationService.SaveFormData($scope.User).then(function (d) {
                    //alert(d);
                    if (d.data.Data == 'Success') {
                        //have to clear form here
                        $window.location.href = '/';
                        //ClearForm();
                    }
                    $scope.submitText = "Save";
                });
            }
            else {
                $scope.message = '';
            }
        }
    }
    function ClearForm() {
        $scope.User = {};
        $scope.f1.$setPristine(); //here f1 is form name
        $scope.submitted = false;
    }
}]);
    
app.controller('LoginController',['$scope', 'LoginService', '$window','$location', function ($scope, LoginService, $window,$location) {
    //Default Variable
    $scope.submitText = "Login";
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.Login = {
        Username : '',
        Password: ''
    };
    
    $scope.$watch('f2.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });
    $scope.LoginData = function (data) {
        if ($scope.submitText == 'Login'){
            $scope.submitted = true;
            $scope.message = '';

            if ($scope.isFormValid){
                $scope.submitText = 'Please Wait...';
                $scope.Login = data;
                LoginService.SaveFormData($scope.Login).then(function (d) {
                    //alert(d);
                    if (d.data.Data == 'Success') {
                        //have to clear form here
                        //$window.location.href = 'adminhome.html';
                        //location.pathname('/admin');
                        $window.location.href = '/admin';
                        //ClearForm();
                    }
                    else {
                alert('Login Failed');
                $scope.submitText = "Login";
                    }
    });
            }
            else {
                $scope.message = '';
            }
        }
    }
}]);

app.controller('ContactController',['$scope', 'ContactService', '$window', function ($scope, ContactService, $window) {
    //Default Variable
    $scope.submitText = "Send";
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.Contact = {
        Name : '',
        Email: '',
        Message: ''
    };
    
    $scope.$watch('f3.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });
    $scope.ContactData = function (data) {
        if ($scope.submitText == 'Send'){
            $scope.submitted = true;
            $scope.message = '';

            if ($scope.isFormValid){
                $scope.submitText = 'Please Wait...';
                $scope.Contact = data;
                ContactService.SaveFormData($scope.Contact).then(function (d) {
                    //alert(d);
                    if (d.data.Data == 'success') {
                        //have to clear form here
                        //alert('Information Saved');
                        ClearForm();
                    }
                    else {
                //alert('Information Not Saved');
                    }
                $scope.submitText = "Send";
    });
            }
            else {
                $scope.message = '';
            }
        }
    }
     function ClearForm() {
        $scope.Contact = {};
        $scope.f3.$setPristine(); //here f1 is form name
        $scope.submitted = false;
    }
}]);

app.controller('TextEditorController', ['$scope', function($scope){
$scope.content = 'llll';
$scope.htmlContent = 'Write Here';
}]);

app.controller('LogoutController', ['$scope', '$window',function($scope,$window) {
      $scope.logoutUser = function() {
        $window.location.href = '/';
    };
}]);

app.controller('NewblogController',['$scope', 'NewblogService', '$window', function ($scope, NewblogService, $window) {
    //Default Variable
    $scope.submitText = "Save";
    $scope.submitted = false;
    $scope.message = '';
    $scope.isFormValid = false;
    $scope.Blog = {
        Title : '',
        SubTitle: '',
        htmlContent: '',
        ImageLink:''
    };
    
    $scope.$watch('f4.$valid', function (newValue) {
        $scope.isFormValid = newValue;
    });
    $scope.NewblogData = function (data) {
        if ($scope.submitText == 'Save'){
            $scope.submitted = true;
            $scope.message = '';

            if ($scope.isFormValid){
                $scope.submitText = 'Please Wait...';
                $scope.Contact = data;
                NewblogService.SaveFormData($scope.Blog).then(function (d) {
                    //alert(d);
                    if (d.data.Data == 'success') {
                        //have to clear form here
                        alert('Blog Posted');
                        $scope.submitText = "Save";
                        ClearForm();
                    }
                    else {
                alert('Blog Not Saved');
                $scope.submitText = "Save";
                    }
    });
            }
            else {
                $scope.message = '';
            }
        }
    }
     function ClearForm() {
        $scope.Contact = {};
        $scope.f4.$setPristine(); //here f1 is form name
        $scope.submitted = false;
    }
}]);

/*app.controller("ctrl",["$scope","$log",function($scope,$log){
    var paramsObject = {};
        window.location.search.replace(/\?/,'').split('&').map(function(o){ paramsObject[o.split('=')[0]]= o.split('=')[1]});
         $log.log(paramsObject)
         $scope.parameters=JSON.parse(JSON.stringify(paramsObject));
    }]);
*/
/* Application Controllers Coding End */

    
/* Application Methods Coding Start */
app.controller('FrmController',['$scope','$log','PostCommentService','ShowCommentService',function ($scope,$log,PostCommentService,ShowCommentService) {
    var paramsObject1 = {};
        window.location.search.replace(/\?/,'').split('&').map(function(o){ paramsObject1[o.split('=')[0]]= o.split('=')[1]});
         $log.log(paramsObject1)
         $scope.parameters1=JSON.parse(JSON.stringify(paramsObject1));
         showComments();
         //$scope.comment = [];
         function showComments(){
                    ShowCommentService.showComment($scope.parameters1).then(function(d){
                     $scope.comment = JSON.parse(d.data.Data);                                                  
                })
                }
    
btn_add();
        function btn_add() {
                if($scope.txtcomment !=''){
                     PostCommentService.postComment($scope.parameters1,$scope.txtcomment).then(function (d) {
                             if (d.data.Data == 'success') {
                        //have to clear form here
                     $scope.comment.push($scope.newComment);
                     //alert('Comment Posted');
                     $scope.txtcomment = "";
                    }
                     else {
                     //alert('Comment Not Posted');
                    }
                    })
                $scope.remItem = function($index) {
                    $scope.comment.splice($index, 1);
                }
            }
                }
                
                }]);

/* Application Methods Coding End */

app.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);