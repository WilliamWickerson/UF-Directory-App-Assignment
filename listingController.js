angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.search = function() {
      $scope.searchQuery = angular.copy($scope.query);
    };
    $scope.enter = function() {
      if (keyEvent.which === 13)
        $scope.search();
    }
    $scope.addListing = function() {
      $scope.add.code = angular.uppercase($scope.add.code);
      $scope.listings.push($scope.add);
      $scope.add = null;
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice($scope.listings.indexOf(index),1);  
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };
  }
]);