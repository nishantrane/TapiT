app.controller("addCtrl",function($scope,$location,store,$firebaseObject){

		$scope.logout=function(){
			$location.path("/");
		};

		$scope.adddata=function()
		{
			//Geeting data from page and adding to array and then firebase
			console.log("Key string in add controller   "+ store.ks);
			if($scope.key==null || $scope.pass==null || ($scope.key==null && $scope.pass==null))
				alert(" Please enter valid data ");
			else
			{
				if(store.ks!=undefined)
				{
					store.keyary=store.ks.split(",");
				}
				else
				{
					store.keyary=[];
				}
				var p=store.storage.getItem(3103);
				store.keyary[store.keyary.length]=$scope.key;
				var pd=store.encrypt($scope.key,$scope.pass,p);
				store.ks=store.keyary.toString();
				store.db1.ref(''+store.email+'/'+$scope.key).set(pd.toString());	//Encrypted data getting stored
				store.database.child(store.email).child('keyStr').set(store.ks);	//String of keys stored on firebse
				$scope.key=null;
				$scope.pass=null;
			}
		};
		store.keyary.splice(0,1);

		$scope.todisp=function()
		{
			var x=store.email;
			var dg=store.database.child(x).child('keyStr');
  		dg.on('value',function(v){
						store.ks=v.val()
						if(store.ks!=null)
						{
							store.keyary=store.ks.split(",");
						}
						console.log("todisp Fucntion | Keys are ",store.ks);
						if(store.ks===null || store.ks===undefined || store.ks=="temp")
						{
							alert(" No records to display ");
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
								store.database.child(store.email).child('keyStr').set(store.ks);
							}
							$location.path("disppass");
						}
					});
				};
	});
