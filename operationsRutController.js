
app.controller("operationsRutController", function ($scope) {
    $scope.rutIn = "";
    $scope.rutOut = "";
		$scope.msgError = undefined;

		$scope.checkDigit = function(){
			$scope.msgError = undefined;
    	$scope.rutOut = "";
			var localRut = $scope.rutIn.trim();
			var dv = "";
			var reg = new RegExp('^[0-9]+$');	
			if(localRut.match(reg)){
				if(localRut.length > 8){
					$scope.msgError = "The maximun length allowed for this function is 8";
				}else{
					var sum = 0;
					var counter = 2;
					for(var i=localRut.length-1; i>=0; i--){
						sum = sum + (localRut[i]*counter);
						counter++
						if(counter>7){counter=2;}
					}
					/*var div = sum / 11;*/
					var modDiv = sum % 11;					
					if((11 - modDiv)== 10){dv = "K";}
					if((11 - modDiv)== 11){dv = "0";}
					if((11 - modDiv)!= 10 && (11 - modDiv)!= 11){dv = 11-modDiv;}
					}
			}else{
				if(localRut.length == 0){
					$scope.msgError = "You must enter some value";
				}else{
					$scope.msgError = "You must enter only numbers";
				}				
			}
			if(dv != ""){
				$scope.rutOut = localRut+"-"+dv;
			}
		}
});

