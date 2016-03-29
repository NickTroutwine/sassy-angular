angular.module('main').controller('NumController', NumController);
NumController.$inject = ['$http', '$state'];

function NumController($http, $state) {
  var self = this;
  this.newUser = {};

  this.addUser = function() {
    
}