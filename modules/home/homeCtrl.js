app.controller("homeCtrl",function($scope,$location,store,$firebaseObject)
	{	
		
		$scope.ifsignupdone=function()
		{        
            if(store.storage.getItem(9)!=undefined)
            {
                alert(" Signup has been done already ");
				store.lgflag=true;
				$location.path("verifypin");
            }
			else
			{
			   $location.path("getpin");
            }
		};
		$scope.iflogindone=function()
		{ 
			if(store.storage.getItem(9)==undefined)
			{
				alert("Sign up first !");
				$location.path("getpin");	
			}
			else
			{
				store.lgflag=true;
				$location.path("verifypin");
			}
		};

				
	});
	
	
	