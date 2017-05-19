var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
		.when("/home", {
        templateUrl : "main.html"
    })
    .when("/getUniqueFromList", {
        templateUrl : "london.html",
        controller : "londonCtrl"
    })
    .when("/paris", {
        templateUrl : "paris.html",
        controller : "parisCtrl"
    });
});

app.controller("londonCtrl", function ($scope) {
		$scope.types = [
    	{typeConcat : "new line", symbol : "\n"},
			{typeConcat : "semicolon", symbol : ";"},
			{typeConcat : "dash", symbol : "-"},
			{typeConcat : "underscore", symbol : "_"},
		];

    $scope.msg = "I love London";
		$scope.checks = { 
			trim : true,	 
			blank : true,
			insensitive : true
		};

		$scope.checkList = function(){
			console.log($scope.selectedType);
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
			}else{
				$scope.msg = "The array hasn't duplicates values";
			}			
		}

		function arrayOptions(array){
			var newArray = [];			
			var indexNewArray = 0;
			for (var j = 0; j < array.length; j++) {
				if($scope.checks.insensitive == true){array[j] = array[j].toUpperCase();}			
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
						for(var j = 0; j < result.repeated.length ; j++){
							if(result.repeated[j].element == array[i]){
								/*Se encuentra en los repetidos*/
								result.repeated[j].count++;
							}
							else{
								result.repeated.push({element : array[i], count : 1});
							}
						}					
					}
				}
		  }
		  return result;
		}
});

app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
		$scope.checkList = function(){
			$scope.msg = "Clicked";
		}
});;
