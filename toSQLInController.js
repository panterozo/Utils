
app.controller("toSQLInController", function ($scope) {

		$scope.types = [
    	{typeConcat : "new line", symbol : "\n"},
    	{typeConcat : "tab", symbol : "\t"},
			{typeConcat : "semicolon", symbol : ";"},
			{typeConcat : "dash", symbol : "-"},
			{typeConcat : "underscore", symbol : "_"},
		];

		$scope.checks = {
			double : false,
			simple : true,
		}

		$scope.UpdateCheckBox = function(name){
			if(name == "toSimple" && $scope.checks.double == true){
				$scope.checks.double = false;
			}
			if(name == "toDouble" && $scope.checks.simple == true){
				$scope.checks.simple = false;
			}
		}

    $scope.stringToReplace = "";
    $scope.stringOut = undefined;
		$scope.msgError = undefined;

		$scope.replaceString = function(){
			$scope.msgError = undefined;
    	$scope.stringOut = undefined;
			try{
				if($scope.stringToReplace.trim() != ""){
					var array;
					for(var i=0; i < $scope.types.length; i++){
						if($scope.types[i].typeConcat == $scope.selectedType.typeConcat){
							array = $scope.stringToReplace.split($scope.types[i].symbol);
							break;
						}
					}
					var cleanString = "";
					if($scope.checks.simple == true){
						cleanString = "('"+array.join("','")+"')";
					}
					else{
						cleanString = '("'+array.join('","')+'")';
					}
					$scope.stringOut=cleanString;

				}else{
					$scope.msgError = "Please insert elements in the textarea box";
				}			
			}catch(err){
				$scope.msgError = err.toString();
			}
			
		}
});

