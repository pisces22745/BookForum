/**
 * Created by shao on 2016/9/11.
 */
angular.module('app').filter('page', function () {
  return function (input, page, pageSize) {
    if (!input) {
      return input;
    }
    if (page < 0 || pageSize <= 0) {
      return [];
    }
    var start = (page-1) * pageSize;
    var end = page * pageSize;
    return input.slice(start,end);
  }
})
