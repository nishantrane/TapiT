app.controller("getPinCtrl",function($scope,$location,store,$firebaseObject){
	    $scope.show4pin=false;
        $scope.hidemail=false;

        $scope.setemail=function(){
                
                var str = $scope.EmailId;
                store.email = str.replace(/\./g,"!");

                store.database.child(store.email).set("");
                $scope.show4pin=true;
                $scope.hidemail=true;

                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

                for (var i = 0; i < 10; i++)
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
                console.log(text);
                store.storage.setItem(3103,text);
                //To Encrypt & decrypt use this key from local storage
                //>>>>>>>>>>store.storage.getItem(3103)<<<<<<<<<<<<<<<
        }

	    $scope.getpinfunc=function(){

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