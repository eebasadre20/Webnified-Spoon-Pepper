var app = angular.module('testApp',[]);

app.controller('TestController', [
	'$scope',
	function ( $scope ) {
		$scope.tabPane = 1;
		$scope.setYear = 2014;
		$scope.setMonth = 'January';
		$scope.showComments = false;
		$scope.monthDisplay = true;
		$scope.defaultYear = '2014';
		$scope.displayComments = [];

		$scope.testimony = {
			"comment" : [
							{	"name"		: "Edsil Basadre",
								"img_url"   : "http://placehold.it/270x150",
			  					"testimony" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			  					"month"		: "January",
			  					"year"		: "2014"
							},
							{	"name"		: "Geoff Diaz",
								"img_url"   : "http://placehold.it/270x150",
								"testimony" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
								"month"		: "January",
								"year"		: "2014"
					    	},
							{	"name"		: "Raven Duran",
								"img_url"   : "http://placehold.it/270x150",
								"testimony" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
								"month"		: "January",
								"year"		: "2014"
							}
						]			
			};

		var comments = $scope.testimony.comment;


		$scope.setTabPanel = function ( year ) {
			$scope.monthDisplay = true;
			$scope.setYear = year;
			$scope.checkYear(year);
		};

		$scope.checkYear = function (year) {		
			return $scope.setYear === year;
		}

		$scope.checkMonth = function ( month ) {
			return $scope.setMonth === month;
		}

		 $scope.setMonthComments = function ( month ) {
			for(var i in comments) {
				(comments[i].month == month) ? $scope.displayComments.push(comments[i]) : "";
			}

			console.log($scope.displayComments);
		}

		$scope.setMonthPanel = function ( month ) {
			$scope.displayComments.length = 0;
			$scope.checkMonth($scope.setMonth)
			$scope.setMonthComments(month);
			console.log($scope.displayComments);
		}

		$scope.setDefault = function() {
			$scope.setTabPanel($scope.setYear);
			$scope.setMonthPanel($scope.setMonth);
		}

		$scope.setDefault();
}]);