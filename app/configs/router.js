'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');
  /**
   * create.html创建用户路由
   */
  $stateProvider.state('reader',{
    url:'/reader',
    template:'<div ui-view></div>',
    abstract:true
  });
  $stateProvider.state('reader.create',{
    url:'/create',
    templateUrl:'controllers/reader/create.html',
    controller:'ReaderCreateCtrl as vm'
  });

  /**
   * list.html 帖子路由
   */
  $stateProvider.state('thread',{
    url:'/thread',
    template:'<div ui-view></div>',
    abstract:'true'
  });
  $stateProvider.state('thread.list',{
    url:'/list',
    templateUrl:'controllers/thread/list.html',
    controller:'ThreadListCtrl as vm'
  });
});
