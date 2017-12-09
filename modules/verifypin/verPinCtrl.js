app.controller("verPinCtrl",function($scope,$location,store,$firebaseObject){
		
		$scope.verifypinfunc=function(){
        	
        	var verifyfourdp="";
        	verifyfourdp=verifyfourdp+$scope.p+$scope.q+$scope.r+$scope.s;
        	console.log(verifyfourdp);
        	var x=store.email;
       		var dg=store.database.child(x).child("fourDigitPin")
          	//console.log($firebaseObject(store.database.child(store.email).child("fourDigitPin")));
        	//console.log($firebaseObject(store.db1.child(store.email).child("fourDigitPin")));
        	//console.log(firebase.database.child(store.email));
        	//console.log(firebase.database.ref(store.email));
        	dg.on('value',function(sn){

        		if(verifyfourdp==sn.val())
				{
                	alert("PIN has Verified");
					$location.path("gettap");
                    console.log('PIN | From firebase',sn.val());
                    console.log('PIN | Entered by user',verifyfourdp);
				}
            	else
            	{
            	    alert("Try again !!!");
					$scope.p=null;$scope.q=null;$scope.r=null;$scope.s=null;
            	}
        	});
		};
	
	});