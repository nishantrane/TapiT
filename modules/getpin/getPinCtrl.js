app.controller("getPinCtrl",function($scope,$location,store,$firebaseObject){
	    
	    $scope.getpinfunc=function(){
            var str = $scope.EmailId;
            store.email = str.replace(/\./g,"!");

            store.database.child(store.email).set("");
            if($scope.a==undefined && $scope.b==undefined && $scope.c==undefined && $scope.d==undefined){
                alert(" PIN has not set" );
				$location.path("getpin");
            }
            else{
            	/*
                Local storage usage
                store.storage.setItem(9,$scope.a);
            	store.storage.setItem(10,$scope.b);
            	store.storage.setItem(11,$scope.c);
            	store.storage.setItem(12,$scope.d);

                */
                var fourdp="";
                fourdp=fourdp+$scope.a+$scope.b+$scope.c+$scope.d;
				store.database.child(store.email).child("fourDigitPin").set(fourdp);
                $location.path("verifypin");
            }
		};
                
	});