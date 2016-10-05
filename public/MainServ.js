angular.module("chatApp").service("mainServ", function($http) {
  //code goes here

  this.postChat = function(chat){
    return $http({
      method: "POST",
      url: "/chat",
      data: chat
    }).then(function(response){
      return response;
    })
  };

  this.getChat = function(){
    return $http({
      method: "GET",
      url: "/chat"
    }).then(function(response){
      return response;
    })
  };

});
