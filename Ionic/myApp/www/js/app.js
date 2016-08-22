// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// var socket = new WebSocket("ws://planetz.herokuapp.com/");
//var socket = new WebSocket("ws://planetz.herokuapp.com/");
angular.module('venbest', ['ionic', 'ngWebSocket'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.factory('WebData', function($websocket) {
      // Open a WebSocket connection
      var dataStream = $websocket('ws://planetz.herokuapp.com/');
      var _callback = [];
      var _sendIndex = index => {
        dataStream.send(index)
        .then( () => {
          dataStream.onMessage( event => {
            var jsonAnswer = JSON.parse(event.data);
            _callback[0] = jsonAnswer.description;
          }); 
        });
      }

      var methods = {
        callback: _callback,
        sendIndex: index => {
          _sendIndex(index);
        }
      };

      return methods;
      
    })

.controller("checkPlanetCtrl", function($scope, WebData){
  $scope.WebData = WebData;
  $scope.data = {
    indexSelected: null,
    get answer() { 
      return WebData.callback.join('');
    },
    availableOptions: [
    {id: '1', name: 'Меркурий'},
    {id: '2', name: 'Венера'},
    {id: '3', name: 'Земля'},
    {id: '4', name: 'Марс'},
    {id: '5', name: 'Юпитер'},
    {id: '6', name: 'Сатурн'},
    {id: '7', name: 'Уран'},
    {id: '8', name: 'Нептун'},
    {id: '9', name: 'Плутон'},
    ],
    send: function() {
      if (this.indexSelected !== null) {
        $scope.WebData.sendIndex(this.indexSelected);
      } else {
        alert("Выберите планету из списка!");

      }
    }

  }

})





 // send: function() {
 //      () => socket.send(this.indexSelected);
 //      socket.onmessage = function(event) {
 //        var jsonAnswer = JSON.parse(event.data);
 //        $scope.data.answer = jsonAnswer.description;
 //      }
 //    }

 //  }



 // index => {
 //          dataStream.send(index)
 //          .then( () => {
 //            dataStream.onMessage( event => {
 //              var jsonAnswer = JSON.parse(event.data);
 //              alert(jsonAnswer.description);
 //            })
 //          });

 //        }