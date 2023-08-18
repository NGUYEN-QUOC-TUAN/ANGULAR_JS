window.TaiKhoanController = function ($scope, $http) {
  $scope.listTaiKhoan = [];

  $http.get(AllTaiKhoanAPI).then(function (response) {
    $scope.listTaiKhoan = response.data;
  });
  $scope.form_dangnhap = {
    taiKhoan: "",
    matKhau: "",
    soDienThoai: "",
    id: "",
  };
  var index = 0;
  $scope.dangNhap = function () {
    var taiKhoan_form = $scope.form_dangnhap.taiKhoan;
    var matKhau_form = $scope.form_dangnhap.matKhau;
    for (let i = 0; i < $scope.listTaiKhoan.length; i++) {
      if (
        matKhau_form == $scope.listTaiKhoan[i].matKhau &&
        taiKhoan_form == $scope.listTaiKhoan[i].taiKhoan
      ) {
        window.location.href = "./index.html";
      }
      index++;
      if (index == $scope.listTaiKhoan.length + 1) {
        alert("SAI THÔNG TIN ĐĂNG NHẬP");
        return;
      }
    }
  };

  $scope.dangKy = function (event) {
    var mk1 = $scope.form_dangnhap.matKhau;
    var mk2 = $scope.form_dangnhap_matKhau_2;
    if (mk1 != mk2) {
      alert("MẬT KHẨU GIỐNG NHAU");
    }
    event.preventDefault();
    $http.post(AllTaiKhoanAPI, $scope.form_dangnhap).then(function (response) {
      $scope.listTaiKhoan = response.data;
    });
  };
  $scope.quenMatKhau = function (event) {};
};
