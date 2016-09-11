/**
 * Created by shao on 2016/9/11.
 */
angular.module('app').controller('ThreadListCtrl',function () {
  var vm = this;
  vm.items = [
    {
      title:'这是第一个帖子',
      poster:'邵炉琴',
      dateCreate:'2016-09-10'
    },
    {
      title:'这是第二个帖子',
      poster:'诸涛涛',
      dateCreate:'2016-09-09'
    },
    {
      title:'这是第三个帖子',
      poster:'冯坚楠',
      dateCreate:'2016-09-08'
    }
  ];
  for(var i = 0 ; i < 10 ; i++){
    var date =new Date();
    vm.items.push({
      title:'主题'+i,
      poster:'user'+i,
      dateCreate:new Date()
    });
  }
  vm.page = {
    size: 5,
    numPages: 5,
    total: vm.items.length
  };
});
