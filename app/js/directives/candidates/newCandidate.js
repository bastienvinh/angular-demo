// TODO : change to config style
app.directive( 'newCandidateComponent', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/directives/candidates/newCandidate.html',
        scope: {
            newCandidate: '=candidate'
        }
    };

});