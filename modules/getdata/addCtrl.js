
app.controller("addCtrl",function($scope,$location,store,$firebaseObject){
				
		$scope.logout=function(){
			$location.path("/");
		};

		$scope.adddata=function()
		{
			//store.database.child(store.email).child($scope.key).set($scope.pass);
			
			/*
       		var dg=store.database.child(store.email).child('keyStr');

       		dg.on('value',function(sn){
       			store.ks=sn.val();
        	});
		*/

			//store.ks=store.storage.getItem(100);

			//Geeting data from page and adding to array and then firebase

			console.log("Key string in add controller   "+ store.ks);
			if($scope.key==null || $scope.pass==null || ($scope.key==null && $scope.pass==null))
				alert(" Please enter valid data ");
			else
			{
				if(store.ks!=undefined)
				{
					store.keyary=store.ks.split(",");
					console.log(store.keyary.length);
				}
				
				else
				{
					store.keyary=[];
				}
				store.keyary[store.keyary.length]=$scope.key;
				console.log("Key :- ",$scope.key);
				console.log("Pass :- ",$scope.pass);
				var pd=store.encrypt($scope.key,$scope.pass);
				console.log("Pass ala re ",pd);
				store.ks=store.keyary.toString();
				console.log("Encryptted password	",pd," ***END OF CONSOLE****");
				var dtos=pd.toString();
				console.log("Encrypted ",dtos);
				var sttemp='AABBXC';
				//console.log(JSON.parse(sttemp));
				//console.log(dtos);
				//var dddd=JSON.parse(dtos);
				var pg=store.decrypt(dtos)
				console.log("Parat string madhe ",pg);
				
				store.db1.ref(''+store.email+'/'+$scope.key).set(pd.toString());
				//store.database.child(store.email).child($scope.key).set({pd});

				store.database.child(store.email).child('keyStr').set(store.ks);
				//store.storage.setItem(100,store.ks);
				
				alert("Data added !");
				$scope.key=null;
				$scope.pass=null;	
			}
		};	
	
			store.keyary.splice(0,1);
		$scope.todisp=function()
		{	

			store.ks=store.storage.getItem(100);
			if(store.ks!=null)
			{
				store.keyary=store.ks.split(",");
			}
			console.log("todisp Fucntion | Keys are ",store.ks);
			if(store.ks===null || store.ks===undefined || store.ks=="temp")
			{
				alert("No records to display");
			}
			else if(store.keyary[0]==null || store.keyary[0]==undefined)
			{
				store.keyary=[];
			}
			else{
				if(store.keyary[0]=="temp")
				{
					store.keyary.splice(0,1);
					store.ks=store.keyary.toString();
					store.storage.setItem(100,store.ks);
				}
				$location.path("disppass");
			}
				
		};	

				
	});