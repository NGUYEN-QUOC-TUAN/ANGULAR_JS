const myModule = angular.module("myModule", ["ngRoute"]);

myModule.controller("controller", function ($scope) {});

myModule.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/trang-chu", {
      templateUrl: "./pages/trangchu.html",
      controller: LinhKienController,
    })
    .when("/san-pham", {
      templateUrl: "./pages/sanpham.html",
      controller: SanPhamController,
    })
    .when("/gioi-thieu", {
      templateUrl: "./pages/gioithieu.html",
    })
    .when("/ql-sanpham", {
      templateUrl: "./pages/quanLySanPham.html",
      controller: SanPhamController,
    })
    .when("/gio-hang", {
      templateUrl: "./pages/giohang.html",
      controller: SanPhamController,
    })
    .when("/mua-hang/:id", {
      templateUrl: "./pages/muahang.html",
      controller: MuaHangController,
    })
    .when("/tin-tuc", {
      templateUrl: "./pages/tintuc.html",
    })
    .when("/dang-ky", {
      templateUrl: "./pages/dangky.html",
    })
    .when("/dang-nhap", {
      templateUrl: "./pages/dangnhap.html",
    })
    .otherwise({
      templateUrl: "./pages/trangchu.html",
      controller: LinhKienController,
    });
});
