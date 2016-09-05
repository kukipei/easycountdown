(function () {
    'use strict';

    var easyCountDown = angular.module('easyCountDown', []);

    easyCountDown.controller('CountDownController', ['$scope', '$interval', function($scope, $interval){
        CountDownController.$inject = ['$scope', '$interval'];

        function CountDownController($scope, $interval) {
            this.$scope = $scope;
            this.$interval = $interval;
        }
        CountDownController.prototype.init = function () {
            var endDate = new Date($scope.endDate);
            if (!(endDate instanceof Date)) {
                return;
            }
            if (isNaN(endDate.getTime())) {
                return;
            }
            this.intervalReff = $interval(function () {
                var startDate = new Date(), diff = (Number(endDate) - Number(startDate)) / 1000, days = Math.floor(diff / 86400), hours, minutes;
                if (0 < diff) {
                    diff -= days * 86400;
                    hours = Math.floor(diff / 3600) % 24;
                    diff -= hours * 3600;
                    minutes = Math.floor(diff / 60) % 60;
                }
                else {
                    days = hours = minutes = 0;
                    _this.destroyInterval();
                }
                $scope.days = days;
                $scope.counter = days.toString() + ":" +
                    ('0' + hours.toString()).substr(-2) + ":" +
                    ('0' + minutes.toString()).substr(-2);
            }, 1000);
            $scope.$on("$destroy", function () {
                this.destroyInterval();
            });
        };
        CountDownController.prototype.range = function (n) {
            return new Array(n);
        };
        CountDownController.prototype.destroyInterval = function () {
            if (angular.isDefined(this.intervalReff)) {
                $interval.cancel(this.intervalReff);
                this.intervalReff = undefined;
            }
        };
        CountDownController.controllerId = "CountDownController";
        return CountDownController;
    }]);
    easyCountDown.directive('easyCountDownDirective', ['$interval', function($interval) {
        return {
            restrict: 'A',
            template:   '<div ng-controller="ctrl" >' +
                            '<div class="outer" id="stopWatch">' +
                                '<div class="counter">{{counter}}</div>' +
                                '<div class="points" style="-moz-transform: rotate({{90 + $index * 6}}deg); -ms-transform: rotate({{90 + $index * 6}}deg); -webkit-transform: rotate({{90 + $index * 6}}deg); transform: rotate({{90 + $index * 6}}deg);" ng-repeat="a in ctrl.prototype.range(30) track by $index">' +
                                    '<div class="circle floatRight" ng-class="{\'activePoint\': days > ($index + 30), \'inactivePoint\': days <= ($index + 30)}"></div>' +
                                    '<div class="squere floatRight" ng-class="{\'activePoint\': days > ($index + 30), \'inactivePoint\': days <= ($index + 30)}"></div>' +
                                    '<div class="circle floatLeft" ng-class="{\'activePoint\': days > $index, \'inactivePoint\': days <= $index}"></div>' +
                                    '<div class="squere floatLeft" ng-class="{\'activePoint\': days > $index, \'inactivePoint\': days <= $index}"></div>' +
                                 '</div>' +
                            '</div>' +
                        '</div>',
            controller: 'CountDownController',
            controllerAs: 'ctrl',
            scope : {
                endDate: '@'
            },
            link : function($scope, element, attributes, ctrl) {
                ctrl.prototype.init();
            }
        }
    }]);

})();
