

app.controller("toOneLineStringController", function ($scope) {

		$scope.checks = {
			toOneLine : true,
			tabSpaces : true,
			trim : true,
			toLowerCase : false,
			toUpperCase : false

		}
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

		$scope.UpdateCheckBox = function(name){
			if(name == "toLowerCase" && $scope.checks.toUpperCase == true){
				$scope.checks.toUpperCase = false;
			}
			if(name == "toUpperCase" && $scope.checks.toLowerCase == true){
				$scope.checks.toLowerCase = false;
			}
		}

		$scope.replaceString = function(){
			try{
				$scope.msgError = undefined;
	    	$scope.stringOut = "";
				var localStringIn = $scope.stringToReplace;
				if(localStringIn != ""){
					
					if($scope.checks.trim == true){
						localStringIn = $scope.stringToReplace.trim();
					}
					if($scope.checks.toOneLine == true){
						localStringIn = localStringIn.replace(/(?:\r\n|\r|\n)/g, '');
					}
					if($scope.checks.tabSpaces == true){
						localStringIn = localStringIn.replace(/\t/g,"");
					}
					if($scope.checks.toLowerCase == true){
						localStringIn = localStringIn.toLowerCase();
					}
					if($scope.checks.toUpperCase == true){
						localStringIn = localStringIn.toUpperCase();
					}
					if($scope.replaceIn != "" && $scope.replaceOut != ""){
						var replace = new RegExp($scope.replaceIn,"g");
						localStringIn = localStringIn.replace(replace,$scope.replaceOut);
					}
					$scope.stringOut = localStringIn;
				}else{
					$scope.msgError = "You must insert elements in both text boxes";
				}
			}
			catch(err){
				$scope.msgError = err.toString();
			}			
		}
});

