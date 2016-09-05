(function () {
    'use strict';

    var easyCountDown = angular.module('easyCountDown', []);

    easyCountDown.controller('CountDownController', ['$scope', '$interval',
        function($scope, $interval) {

          function destroyInterval () {
              if (angular.isDefined($scope.intervalReff)) {
                  $interval.cancel($scope.intervalReff);
                  $scope.intervalReff = undefined;
              }
          };

          var endDate = new Date($scope.endDate);
          if (!(endDate instanceof Date)) {
              return;
          }
          if (isNaN(endDate.getTime())) {
              return;
          }

          $scope.intervalReff = $interval(function () {
              var hours, minutes, sec,
                  startDate = new Date(),
                  diff = (Number(endDate) - Number(startDate)) / 1000, days = Math.floor(diff / 86400)
              ;

              if (0 < diff) {
                  diff -= days * 86400;
                  hours = Math.floor(diff / 3600) % 24;
                  diff -= hours * 3600;
                  minutes = Math.floor(diff / 60) % 60;
                  diff -= minutes * 60;
                  sec = Math.floor(diff);
              } else {
                  days = hours = minutes = sec =0;
                  destroyInterval();
              }

              $scope.days = days;
              $scope.hours = hours;
              $scope.minutes = minutes;
              $scope.sec = sec;
              $scope.counter = days.toString() + ":" + ('0' + hours.toString()).substr(-2) + ":" + ('0' + minutes.toString()).substr(-2);
          }, 1000);

          $scope.$on("$destroy", function () {
              destroyInterval();
          });

          return {
            range: function (n) {
              return new Array(n);
            }
          }
        }
      ]);

    easyCountDown.directive('easyCountDownDirective', function() {
        return {
            restrict: 'A',
            template:   '<div ng-controller="CountDownController as ctrl" >' +
                            '<div class="outer" id="stopWatch">' +
                                '<div class="counter">' +
                                    '<div class="showCount">' +
                                        '<div>Days</div><div class="countVal">{{days}}</div>' +
                                    '</div>' +
                                    '<div class="showCount">' +
                                        '<div>Hours</div><div class="countVal">{{hours}}</div>' +
                                    '</div>' +
                                    '<div class="showCount">' +
                                        '<div>Minutes</div><div class="countVal">{{minutes}}</div>' +
                                    '</div>' +
                                    '<div class="showCount">' +
                                        '<div>Sec</div><div class="countVal">{{sec}}</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="points" style="-moz-transform: rotate({{90 + $index * 6}}deg); -ms-transform: rotate({{90 + $index * 6}}deg); -webkit-transform: rotate({{90 + $index * 6}}deg); transform: rotate({{90 + $index * 6}}deg);" ng-repeat="a in ctrl.range(30) track by $index">' +
                                    '<div class="circle floatRight" ng-class="{\'activePoint\': days > ($index + 30), \'inactivePoint\': days <= ($index + 30)}"></div>' +
                                    '<div class="squere floatRight" ng-class="{\'activePoint\': days > ($index + 30), \'inactivePoint\': days <= ($index + 30)}"></div>' +
                                    '<div class="circle floatLeft" ng-class="{\'activePoint\': days > $index, \'inactivePoint\': days <= $index}"></div>' +
                                    '<div class="squere floatLeft" ng-class="{\'activePoint\': days > $index, \'inactivePoint\': days <= $index}"></div>' +
                                 '</div>' +
                            '</div>' +
                        '</div>',
            controller: 'CountDownController',
            scope : {
                endDate: '@'
            }
        }
    });

})();
