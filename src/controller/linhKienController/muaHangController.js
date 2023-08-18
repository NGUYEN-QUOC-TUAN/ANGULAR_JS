window.MuaHangController = function ($scope, $rootScope, $routeParams, $http) {
  $scope.list = $rootScope.listAllSanPham;

  var id = $routeParams.id;
  $scope.form_mua_hang = {
    id: "",
    moTa: "",
    price: 0,
    image: "",
    loai: "",
    name: "",
    trangThai: "",
  };
  for (let i = 0; i < $scope.list.length; i++) {
    if ($scope.list[i].id == id) {
      $scope.form_mua_hang.name = $scope.list[i].name;
      $scope.form_mua_hang.moTa = $scope.list[i].moTa;
      $scope.form_mua_hang.price = $scope.list[i].price;
      $scope.form_mua_hang.image = $scope.list[i].image;
      $scope.form_mua_hang.loai = $scope.list[i].loai;
      $scope.form_mua_hang.trangThai = $scope.list[i].trangThai;
      $scope.form_mua_hang.id = $scope.list[i].name;
    }
  }

  
  $scope.listAllSanPhamDaMua = [];

  $http.get(AllSanPhamDaMuaAPI).then(function (response) {
    $scope.listAllSanPhamDaMua = response.data;
  });

  $scope.muaSanPham = function(id){
    for (let i = 0; i < $scope.list.length; i++) {
      if ($scope.list[i].id == id) {
        $scope.form_mua_hang = $scope.list[i];
      }
    }
    event.preventDefault();
    -$http.post(AllSanPhamDaMuaAPI, $scope.form_mua_hang).then(function (response) {
      $scope.listAllGioHang.push(response.data);
    });
    alert("SẢN PHẨM ĐÃ ĐƯỢC MUA");  
    window.location.href = "./index.html";
  }
};
