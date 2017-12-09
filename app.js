var app = angular.module("tapit",["ngRoute","firebase"]);

app.config(function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl:"modules/home/home.html",			
				controller:"homeCtrl"
			})
			.when("/getpin",{						
				templateUrl:"modules/getpin/getpin.html",
				controller:"getPinCtrl"
			})
			.when("/verifypin",{
				templateUrl:"modules/verifypin/verifypin.html",						
				controller:"verPinCtrl"
			})
			.when("/gettap",{
				templateUrl:"modules/gettap/gettap.html",
				controller:"getTapCtrl"
			})
			.when("/verifytap",{
				templateUrl:"modules/verifytap/verifytap.html",
				controller:"verTapCtrl"
			})
			.when("/addpass",{
				templateUrl:"modules/getdata/first.html",
				controller:"addCtrl"
			})
			.when("/disppass",{
				templateUrl:"modules/display/second.html",
				controller:"dispCtrl"
			});
	});
	
app.directive("moveNextOnMaxlength", function() {
    return {
        restrict: "A",
        link: function($scope, element) {
            element.on("input", function(e) {
                if(element.val().length == element.attr("maxlength")) {
                    var $nextElement = element.next();
                    if($nextElement.length) {
                        $nextElement[0].focus();
                    }
                }
            });
        }
    }
});		
document.addEventListener('backbutton', function(event){
  			//event.preventDefault(); // EDIT
 			navigator.app.exitApp(); // exit the app
			});
/*
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {	
    document.addEventListener("backbutton", function (e) {
        e.preventDefault(); 
    navigator.notification.confirm("Are you sure want to exit from App?", onConfirmExit, "Confirmation", "Yes,No");
    }, false );
}
 
function onConfirmExit(button) {
    if(button==2){ //If User select a No, then return back;
        return;
    }else{
        navigator.app.exitApp(); // If user select a Yes, quit from the app.
    }
}*/