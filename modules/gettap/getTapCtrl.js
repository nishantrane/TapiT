app.controller("getTapCtrl",function($scope,$location,store){
		
		$scope.cnt1=0;$scope.cnt2=0;$scope.cnt3=0;$scope.cnt4=0;

		$scope.gettapfunc=function(){
            if($scope.cnt1==0 && $scope.cnt2==0 && $scope.cnt3==0 && $scope.cnt4==0)
			{
               alert(" Please enter valid taps" );
               $scope.cnt1=0;$scope.cnt2=0;$scope.cnt3=0;$scope.cnt4=0;
			   $location.path("gettap");
            }
            
            /*
            store.storage.setItem(1,$scope.cnt1);
            store.storage.setItem(2,$scope.cnt2);
            store.storage.setItem(3,$scope.cnt3);
            store.storage.setItem(4,$scope.cnt4);
            */
            
            var fourtap="";
            fourtap=fourtap+$scope.cnt1+$scope.cnt2+$scope.cnt3+$scope.cnt4;
            store.database.child(store.email).child("tapsCnt").set(fourtap);
			$location.path("verifytap");
        };	
              
	});