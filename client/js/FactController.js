angular.module('main').controller('FactController', FactController);
FactController.$inject = ['$http', '$scope'];

function FactController($http, $scope) {
  var self = this;

  this.getFact = function() {
  	var scopeinj = '';
		var one = 'AngularJS was originally developed in 2009 by Misko Hevery at Brat Tech LLC.';
		var two = 'AngularJS is mostly maintained by google.';
	  var three = 'AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News.';
		var four = 'Angulars original release was October 20, 2010.';
		var five = 'Sass stands for Syntactically Awesome Stylesheets.';
		var six = 'initially designed by Hampton Catlin and developed by Natalie Weizenbaum.';
		var seven = 'Sass first appeared in 2006'
		var eight = 'The original syntax, called "the indented syntax", uses a syntax similar to Haml.'
		var rando = Math.round(Math.random()*7);
		if(rando == 0){
			 scopeinj = one
		}
		if(rando == 1){	
		 	scopeinj = two
		 }
		if(rando == 2){	 	
			scopeinj = three
		}
		if(rando == 3){	 	
		 	scopeinj = four;
		 }
		if(rando == 4){ 	
			 	scopeinj = five;
		 }
		if(rando == 5){	
			scopeinj = six;
	  }
	  if(rando == 6){
		 	scopeinj = seven;
		}
		if(rando == 7){	
		 	scopeinj = eight;
		}


$scope.factText = scopeinj



  }
}
