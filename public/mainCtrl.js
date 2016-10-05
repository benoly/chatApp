angular.module("chatApp").controller("mainCtrl", function($scope, mainServ) {
  //code goes here

$scope.postChat=function(chat){
  mainServ.postChat(chat)
  .then(function(response){
    $scope.getChat();
  //   console.log(response);
  })
};

$scope.getChat=function(){
  mainServ.getChat()
  .then(function(response){
    $scope.allChats=response;
    console.log($scope.allChats);
  });
};



});
