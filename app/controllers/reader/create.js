/**
 * Created by Administrator on 2016/9/10.
 */
angular.module('app')
.controller('ReaderCreateCtrl',function () {
  var vm = this;
  vm.submit = function (form) {
    console.log(form);
  }
})
