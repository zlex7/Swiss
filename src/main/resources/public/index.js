var app = angular.module('app', ['ui.router','ngSanitize']);

  app.config( function($stateProvider) {

    var homeState = {
       name: 'home',
       url: '/home',
       component: "home"
     }

     var tournamentsState = {
       name: 'tournaments',
       url: '/tournaments',
       component: "tournaments"
     }


      var oneTournamentState = {
        name: 'tournaments.oneTournament',
        url: '/{tournamentId}',
        component: "oneTournament"
      }

     var profileState = {
       name: 'profile',
       url: '/profile',
       component: "profile"
     }

     var otherProfileState = {

       name: "profile.other",
       url: "/{profileId}",
       component: "otherProfile"
     }

     var settingsState = {

       name: 'settings',
       url: '/settings',
       component: "settings"
     }

     $stateProvider.state(homeState);
     $stateProvider.state(tournamentsState);
     $stateProvider.state(oneTournamentState);
     $stateProvider.state(profileState);
     $stateProvider.state(otherProfileState);
     $stateProvider.state(settingsState);


   });

   angular.module('app').component('tournaments', {

      templateUrl: "tournaments.html",

      controller: function() {

        console.log("tournament controller running");

        this.tournamentLinks = [{"name":"put name here","numPlayers":23,"type":"Swiss","status":"Open"},
      {"name":"put name here","numPlayers":233,"type":"Swiss23","status":"Open23111"},
      {"name":"put name here","numPlayers":23112,"type":"Swiss3432","status":"Open33"},
      {"name":"put name here","numPlayers":2113,"type":"Swiss333","status":"Open232"}];


      }
   });

   angular.module('app').component('home', {

      templateUrl: "home.html",

      controller: function() {

        this.tournamentLinks = [{"name":"chess bash","numPlayers":22,"type":"Swiss","status":"Open"},
        {"name":"Super Smash Bros Dreamhack","numPlayers":1000,"type":"Single Elimination","status":"Closed"},
        {"name":"CSGO 1v1 tourney","numPlayers":10,"type":"Round Robin","status":"Open"},
        {"name":"League of Legends tourney","numPlayers":30,"type":"Double Elimination","status":"Open"}];

        this.tournament_format = "format";

        this.formats = ["<span class='glyphicon glyphicon-tower'></span> &nbsp;Swiss",
         "<span class='fa fa-twitter'></span> &nbsp;Round Robin",
         "&nbsp;<b>{</b> &nbsp;&nbsp;Single elimination",
         "<b>{ }</b> &nbsp;Double elimination"];

        this.toggleFormat = function(format){

          console.log(format);
          this.tournament_format = format;
        }

        this.toggleNew = false;
        this.tournamentClickNew = function(){

          this.toggleNew = !this.toggleNew;
        }

        this.toggleJoin = false;
        this.tournamentClickJoin = function(){

          this.toggleJoin = !this.toggleJoin;
        }

      }
   });

   angular.module('app').component('oneTournament', {

      templateUrl: "oneTournament.html",

      controller: function() {

      }
   });

   angular.module('app').component('profile', {

      templateUrl: "profile.html",

      controller: function() {

      }
   });

   angular.module('app').component('otherProfile', {

      templateUrl: "profile.html",

      controller: function() {

      }
   });

   angular.module('app').component('settings', {

      templateUrl: "settings.html",

      controller: function() {

      }
   });
/*
    $routeProvider.when("/home", {
        templateUrl : "home.html"
    }).when("/tournaments", {
        templateUrl : "tournaments.html"
    })
    .when("/profile", {
        templateUrl : "profile.html"
    })
    .when("/settings", {
        templateUrl : "settings.html"
    });
  });*/
  /*
    app.config( function($httpProvider){

      delete $httpProvider.defaults.headers.post['Content-Type'];

    })
*/
    app.controller('mainCtrl', function($scope,$http,$sce,$location) {

      console.log("controller");


      $scope.headerLinks=["Home","My Tournaments","Profile","FAQ"];

      $scope.urls = ["/home","/tournaments","/profile","/settings"]

      $scope.selectedLinkIndex = 0;

      $scope.headerLinkClick = function($index){

        $scope.selectedLinkIndex = $index;

        $location.path($scope.urls[$index]);


      }

        /*$scope.submit = function() {

          var output = $http({
                  method: 'POST',
                  url: 'localhost:8000/api/json',
                  dataType: 'text/plain',
                  data: $scope.json,
                  headers: { 'Content-Type': 'application/text; charset=UTF-8' }
              })



          var config = {
                      headers : {
                          'Content-Type': 'application/text;charset=utf-8;'
                      }
                }


                $http({

                  url: "http://jsonnow.herokuapp.com/api/json",

                  method: "POST",

                  headers: {
                       'Content-Type': "application/text"
                  },

                  data: $scope.json,

                  transformResponse: [function (data) {
                    // Do whatever you want!
                    return $sce.trustAsHtml(data);
                  }],

                  responseType: "text"

                }).then(function (data, status, headers, config) {

            console.log(data.data);

                    $scope.jsonoutput = data.data;

                });


        }*/
    });
