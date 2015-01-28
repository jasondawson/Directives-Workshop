var app = angular.module('myDirectives', []);

app.directive('pending', function($timeout, $q) {
	return {
		restrict: 'A',
		scope: {
			request: '&'
		},
		link: function(scope, element, attrs) {

			element.bind('click', function(request) {
				attrs.$set('disabled', true);
			
			element.after('<img id="wait" src="img/yinyang_wait.gif" height="40px" width="40px" />');
			
			var myEl = angular.element(document.querySelector('#wait'));
				
				myEl.css({'position': 'fixed', 'left': '50%', 'top': '50%'})
				
				dfd = $q.defer();
				var res = scope.request().then(function(){
					
				myEl.remove();

				dfd.resolve(res);

				attrs.$set('disabled', false);

				});
				
			});
		}
	}

});


app.directive('notify', function() {
	return {
		restrict: 'A',
		scope: {
			title: '=',
			body: '=',
			icon: '=',
			request: '&'
		},
		link: function(scope, element, attrs) {
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
	
		Notification.requestPermission(function (permission) {
				//console.log(permission);
			});
		
		element.bind('click', function(request) {

			//console.log(scope.title, scope.body);
			new Notification(scope.title, {'body': scope.body, 'icon': scope.icon});
				
			});
		}
		}

});