

app.controller("toOneLineStringController", function ($scope) {

/*		$scope.typesToReplace = [
    	{typeConcat : "new line", symbol : "\n"},
			{typeConcat : "semicolon", symbol : ";"},
			{typeConcat : "dash", symbol : "-"},
			{typeConcat : "underscore", symbol : "_"},
		];*/


    $scope.stringIn = "";
    $scope.stringOut = "";
    $scope.replaceIn = "";
    $scope.replaceOut = "";
    $scope.msgError = undefined;

		$scope.replaceString = function(){
			$scope.msgError = undefined;
    	$scope.stringOut = "";
			var localStringIn = $scope.stringToReplace.trim();
			if(localStringIn != ""){
				$scope.stringOut = localStringIn.replace($scope.replaceIn,$scope.replaceOut);
				console.log(2);
			}else{
				$scope.msgError = "You must insert elements in both text boxes";
			}
		}
});

