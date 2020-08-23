var rentalApp = angular.module('rentalApp', ['ngRoute', 'ngFileUpload'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[{');
    $interpolateProvider.endSymbol('}]');    
});

//Do configuration and routing here
rentalApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            controller: 'LoginCtrl',
            templateUrl: '/partials/login.html'         
        })
        .when('/rentalsView',{
            controller: 'IndexCtrl',
            templateUrl: '/partials/rentalsView.html'         
        })        
        .when('/addCommercial',{
            controller: 'AddCommercialCtrl',
            templateUrl: '/partials/addCommercial.html'
        }) 
        .when('/addResidential',{
            controller: 'AddResidentialCtrl',
            templateUrl: '/partials/addResidential.html'
        }) 
        .when('/addStorage',{
            controller: 'AddStorageCtrl',
            templateUrl: '/partials/addStorage.html'
        })                  
        .when('/editCommercial',{
            controller: 'EditCommercialCtrl',
            templateUrl: '/partials/editCommercial.html'
        })  
        .when('/editResidential',{
            controller: 'EditResidentialCtrl',
            templateUrl: '/partials/editResidential.html'
        })  
        .when('/editStorage',{
            controller: 'EditStorageCtrl',
            templateUrl: '/partials/editStorage.html'
        })                   
        .when('/publicView',{
            controller: 'PublicViewCtrl',
            templateUrl: '/partials/publicView.html'
        })     
        .when('/viewCommercial',{
            controller: 'ViewCommercialCtrl',
            templateUrl: '/partials/viewCommercial.html'
        })  
        .when('/viewResidential',{
            controller: 'ViewResidentialCtrl',
            templateUrl: '/partials/viewResidential.html'
        })  
        .when('/viewStorage',{
            controller: 'ViewStorageCtrl',
            templateUrl: '/partials/viewStorage.html'
        })                                          
        .when('/logout',{
            controller: 'LogoutCtrl',
            templateUrl: '/partials/logout.html'
        })  
        .when('/changePassword',{
            controller: 'ChangePwdCtrl',
            templateUrl: '/partials/changePassword.html'
        })  
});

