app.controller("verTapCtrl",function($scope,$location,store){
		
		$scope.v1=0;$scope.v2=0;$scope.v3=0;$scope.v4=0;
		var temp='';
		$scope.verifytapfunc=function(){
			temp=temp+$scope.v1+$scope.v2+$scope.v2+$scope.v3;
			var x=store.email;
       		var dg=store.database.child(x).child("tapsCnt");
            
       		dg.on('value',function(sn){

        		if(temp==sn.val())
				{
				console.log(store.ks)
				store.database.child(store.email).child('keyStr').set(store.ks);
				console.log('TAPS | From firebase',sn.val());
                console.log('TAPS | Entered by user',temp);	
                alert(" Verified !");
				$location.path("addpass");
				
				}

             	else
             	{
             	console.log('TAPS | From firebase',sn.val());
                console.log('TAPS | Entered by user',temp);	
           		alert("Please try again");
				$scope.v1=null;$scope.v2=null;$scope.v3=null;$scope.v4=null;
            	}
        	});
			                 
		};
});
