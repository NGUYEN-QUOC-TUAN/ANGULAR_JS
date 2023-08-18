const myLogin = angular.module("myLogin", ["ngRoute"]);

myLogin.controller("controllers", function ($scope) {});

myLogin.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/dang-ky", {
      templateUrl: "./pages/dangky.html",
      controller: TaiKhoanController,
    })
    .when("/dang-nhap", {
      templateUrl: "./pages/dangnhap.html",
      controller: TaiKhoanController,
    })
    .when("/login", {
      templateUrl: "../index.html",
    })
    .when("/quen-mat-khau", {
      templateUrl: "./pages/quenmatkhau.html",
    })
    .otherwise({
      templateUrl: "./pages/dangky.html",
    });
});
