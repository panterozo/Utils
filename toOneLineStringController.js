

app.controller("toOneLineStringController", function ($scope) {
    $scope.msg = "";
    $scope.rut = "";

		$scope.checkDigit = function(){
			if($scope.rut != ""){
				var sum = 0;
				var counter = 2;
				for(var i=$scope.rut.length-1; i>=0; i--){
					sum = sum + ($scope.rut[i]*counter);
					counter++
					if(counter>7){counter=2;}
				}
				/*var div = sum / 11;*/
				var modDiv = sum % 11;
				if((11 - modDiv)== 10){$scope.msg = "K";}
				if((11 - modDiv)== 11){$scope.msg = "0";}
				if((11 - modDiv)!= 10 && (11 - modDiv)!= 11){$scope.msg = 11-modDiv;}
			}
		}
});

