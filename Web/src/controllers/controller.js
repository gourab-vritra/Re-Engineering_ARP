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