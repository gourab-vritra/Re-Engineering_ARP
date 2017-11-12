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