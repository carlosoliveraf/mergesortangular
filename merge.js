app.controller('merge', function($scope) {
       $scope.greeting = "Hello World";


       $scope.items;
       $scope.arrayNumbers = [];
       $scope.array = [];
       $scope.resultado;

   $scope.ajustaArray = function(){
   		$scope.resultado = null;
   		$scope.arrayNumbers = [];
   		$scope.items = $scope.items.replace(/[^0-9]/ig, "");
    	if($scope.items){
    		$scope.array = $scope.items.split("");
    		for(index in $scope.array){
    			$scope.array[index] = parseInt($scope.array[index]);
    		}

    		for(index in $scope.array){
    			if(!isNaN($scope.array[index])){
    				$scope.arrayNumbers.push($scope.array[index]);
    			}
    		}

    		
    	}

    };


   $scope.clean = function(){
	   	$scope.items = "";
	   	$scope.resultado = null;
	   	$scope.arrayNumbers = [];
	    $scope.array = [];

   };


var merge = function(left, right){
	    console.log(left);
        console.log(right);
    var result  = [],
        il      = 0,
        ir      = 0;

        console.log(left.length);
        console.log(right.length);
    while (il < left.length && ir < right.length){
        if (left[il] < right[ir]){
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    $scope.resultado = result.concat(left.slice(il)).concat(right.slice(ir))
    return $scope.resultado;
}


$scope.mergeSort = function (items){

    // 0 ou 1 neste caso não necessitam ordenação
    if (items.length < 2) {
        return items;
    }

    var middle = Math.floor(items.length / 2),
        left = items.slice(0, middle),
        right = items.slice(middle);
       
        console.log(left);
        console.log(right);
    return merge($scope.mergeSort(left), $scope.mergeSort(right));
}

	

});