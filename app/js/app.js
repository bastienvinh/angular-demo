// Contains constants
const RouteDefPath = {
    HOME : {
        name: 'HOEM',
        path: '/'
    },
    CANDIDATE: {
        name: 'CANDIDATE',
        path: '/candidates'
    }
};



// Remark : only for ES5
angular.tools = {

    getLocalUrl : function( routeName  ) {

        // TODO : improve this function to take all kinds of route
        // TODO : change hash system to be sure it's automatic

        routeName = routeName != null || routeName == ''  ? routeName : '/';
        // TODO : manage https
        return "http://" +  window.location.host + '/#' + RouteDefPath[routeName].path;
    }

};

// ************************** ALL ANGULAR JS CONFIGURATION ******************************/

var app = angular.module( "AngularTestApp", ['ngRoute'] );


// We create our routes
app.config( ['$routeProvider',  function ($routeProvider) {

    // Differents routings
    $routeProvider
        .when( RouteDefPath.HOME.path, { templateUrl: 'partials/home.html', controller: 'HomeController' } )
        .when( RouteDefPath.CANDIDATE.path , { templateUrl: 'partials/candidates.html', controller: 'CandidateController' })
        .otherwise( { redirectTo: '/' } );
}]);