window.LinhKienController = function ($scope, $http) {
  $scope.listLinhKienNew = [];
  $scope.listLinhKienBanChay = [];
  $http.get(AllSanPhamAPI).then(function (response) {
    $scope.listAllSanPham = response.data;
    for (var i = 0; i < $scope.listAllSanPham.length; i++) {
      if ($scope.listAllSanPham[i].trangThai == "new") {
        $scope.listLinhKienNew.push(response.data[i]);
      }
      if ($scope.listAllSanPham[i].trangThai == "banChay") {
        $scope.listLinhKienBanChay.push(response.data[i]);
      }
    }
  });
  $scope.listAllGioHang = [];

  $http.get(AllGioHangAPI).then(function (response) {
    $scope.listAllGioHang = response.data;
  });
  // SẢN PHẨM BÁN CHẠY
  $scope.themSanPhamBanChayVaoGioHang = function (id) {
    alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  
    for (let i = 0; i < $scope.listLinhKienBanChay.length; i++) {
      if ($scope.listLinhKienBanChay[i].id == id) {
        $scope.addBanChay = $scope.listLinhKienBanChay[i];
      }
    }
    event.preventDefault();
    $http.post(AllGioHangAPI, $scope.addBanChay).then(function (response) {
      $scope.listAllGioHang.push(response.data);
    });
  };
  $scope.themSanPhamNewVaoGioHang = function (id) {
    alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  
    for (let i = 0; i < $scope.listLinhKienNew.length; i++) {
      if ($scope.listLinhKienNew[i].id == id) {
        $scope.addNew = $scope.listLinhKienNew[i];
      }
    }
    event.preventDefault();
    $http.post(AllGioHangAPI, $scope.addNew).then(function (response) {
      $scope.listAllGioHang.push(response.data);
    });
  };
};
