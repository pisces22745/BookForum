/**
 * Created by Administrator on 2016/9/10.
 */
angular.module('app').directive('bfFieldError', function ($compile) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, ele, attr, ngModel) {
      var subScope = scope.$new(true);
      subScope.hasError = function () {
        return ngModel.$dirty && ngModel.$invalid;
      };
      subScope.errors = function () {
        return ngModel.$error;
      };
      subScope.customMessages = scope.$eval(attr.bfFieldError);
      var hint = $compile('<div ng-if="hasError()">' +
                              '<div ng-repeat="(name,wrong) in errors()" ng-if="wrong">{{name|error:customMessages}}</div>' +
                           '</div>')(subScope);
      ele.after(hint);
    }
  };
});
