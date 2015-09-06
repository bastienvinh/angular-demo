app.controller( 'HomeController', ['$scope', function ($scope) {

    $scope.title = "HomePage";
    $scope.links = [
        {
            title : 'List of persons hired',
            link: angular.tools.getLocalUrl( RouteDefPath.CANDIDATE.name )
        }
    ];


}] );
