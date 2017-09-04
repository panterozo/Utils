
app.controller("getUniqueListController", function ($scope) {
		$scope.types = [
    	{typeConcat : "new line", symbol : "\n"},
			{typeConcat : "tab", symbol : "\t"},
			{typeConcat : "semicolon", symbol : ";"},
			{typeConcat : "dash", symbol : "-"},
			{typeConcat : "underscore", symbol : "_"},
		];

    $scope.msg = "";
		$scope.checks = { 
			trim : true,	 
			blank : true,
			insensitive : true
		};

		$scope.msgError = undefined;
		$scope.duplicatedTableValues = undefined;
		$scope.uniqueTableValues = undefined;


		$scope.checkList = function(){
			$scope.msgError = undefined;
			$scope.duplicatedTableValues = undefined;
			$scope.uniqueTableValues = undefined;
			try{
				if($scope.listToCheck.trim() != ""){
					var array;
					for(var i=0; i < $scope.types.length; i++){
						if($scope.types[i].typeConcat == $scope.selectedType.typeConcat){
							array = $scope.listToCheck.split($scope.types[i].symbol);
						  array = arrayOptions(array);
							break;
						}
					}
					var result = getUniqueArray(array);
					if(result.origin.length < array.length){
						$scope.msg = "There are some duplicated values!";
						$scope.duplicatedTableValues = result.repeated;
						$scope.uniqueTableValues = result.origin.join("\n");
						/*console.log($scope.uniqueTableValue.split("\n").length);
						$scope.uniqueTableValue = result.origin;*/
						
						/*for(var i = 0; i< result.repeated.length ; i++){
							aux = aux + "El elemento '" +result.repeated[i].element + "' aparece '" + (result.repeated[i].count +1) + "' veces \n";
						}*/
					}else{
						$scope.msg = "The list hasn't duplicates values. Total Elements ("+array.length+")";
						$scope.uniqueTableValues = result.origin.join("\n");
					}			
				}else{
					$scope.msg = "Please insert elements in the textarea box";
				}
			}catch(err){
				$scope.msgError = err.toString();
			}
		}

		function arrayOptions(array){
			var newArray = [];			
			var indexNewArray = 0;
			for (var j = 0; j < array.length; j++) {    
				if($scope.checks.insensitive == true){array[j] = array[j].toLowerCase();}			
				if($scope.checks.trim == true){array[j] = array[j].trim();}
				if($scope.checks.blank == true && array[j] != ""){
					newArray[indexNewArray] = array[j];
					indexNewArray++;
				}				
			}

			if(newArray.length < array.length && newArray.length > 0){
				array = newArray;
			}
			/*false - false*/
			return array;
		}


		function getUniqueArray(array){
  		var result = {origin : [], repeated : []};
		  for(var i = 0; i < array.length; i++){
			  if(result.origin.indexOf(array[i]) == -1){
				  result.origin.push(array[i]);
				}else{
					if(result.repeated.length == 0){
						result.repeated.push({element : array[i], count : 1});
					}else{
						/*El elemento ya se encuentra en el original*/
						var count = 0;			
						for(var j = 0; j < result.repeated.length ; j++){
							if(result.repeated[j].element == array[i]){
								/*Se encuentra en los repetidos*/
								result.repeated[j].count++;
								count ++;
								break;
							}
						}
						if(count == 0){
							result.repeated.push({element : array[i], count : 1});
						}
					}
				}
		  }
		  return result;
		}
});

