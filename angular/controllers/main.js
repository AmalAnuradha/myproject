
function mainController($scope, Welcome, Students) {
	// body...
	$scope.name = "amal";
	$scope.getEntities = function () {

        Students.getList({
            
        }).then(function (result) {
            $scope.entities = result;
            
        });
    };
    $scope.getEntities();
}