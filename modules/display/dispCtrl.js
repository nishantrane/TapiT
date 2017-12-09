app.controller("dispCtrl",function($scope,$location,store){

		$scope.i1;
		$scope.index1;
		$scope.deleteparticular=function(y,u,el){
			$scope.i1=y;
			$scope.index1=u;
			document.getElementById(el).style.display='block';
			
		}
		$scope.hidemodal=function(z){
			document.getElementById(z).style.display='none';
		};
		var x=store.email;
   		var dg=store.database.child(x).child('keyStr');

       		dg.on('value',function(sn){
       			store.ks=sn.val();
        	});

		//store.ks=store.storage.getItem(100);
		console.log("Key string in display controller "+store.ks);
		store.keyary=store.ks.split(",");
		$scope.temp1=store.ks.split(",");
		console.log("Temp is "+$scope.temp1);

		$scope.removeIt=function()
		{
			store.storage.removeItem($scope.i1);
			$scope.temp1.splice($scope.index1,1);
			store.keyary.splice($scope.index1,1);
			
			console.log("Array  is "+$scope.temp1);
			alert(" Password has been removed ");
			
			store.ks=store.keyary.toString();
			$scope.temp1=store.ks.split(",");
			
			if(store.ks==null || store.keyary[0]==null)
			{
				$scope.temp1=[];
				store.keyary=[];
				store.ks="temp";
				console.log("executed condition for null ")
			}
			console.log("KEY string is "+store.ks+"   ||");
			store.storage.setItem(100,store.ks);
			$location.path("disppass"); 	
			document.getElementById('id01').style.display='none';
		};
		
		$scope.logout=function(){
				$location.path("/");
			//	navigator.app.exitApp();
		};
		
		$scope.addmore=function(){
			$location.path("addpass");
		};
		
		$scope.dpass=function(index){
						alert("Password is "+store.decrypt(store.storage.getItem(index)));
		};
	});