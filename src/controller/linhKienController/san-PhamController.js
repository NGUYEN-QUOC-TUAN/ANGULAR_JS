window.SanPhamController = function ($scope, $http, $rootScope) {
  $rootScope.listAllSanPham = [];
  $scope.listAllSanPhamRam = [];
  $scope.listAllSanPhamMain = [];
  $scope.listAllSanPhamCard = [];
  $scope.listAllSanPhamChip = [];
  $scope.listAllGioHang = [];

  $scope.form_sanpham = {
    id: "",
    moTa: "",
    price: 0,
    image: "",
    loai: "",
    name: "",
    trangThai: "",
  };
  $scope.indexUpdate = -1;
  $scope.clearFormSanPham = function () {
    $scope.form_sanpham.id = "";
    $scope.form_sanpham.moTa = "";
    $scope.form_sanpham.price = "";
    $scope.form_sanpham.image = "";
    $scope.form_sanpham.loai = "";
    $scope.form_sanpham.name = "";
    $scope.form_sanpham.trangThai = "";
  };
  $http.get(AllSanPhamAPI).then(function (response) {
    $rootScope.listAllSanPham = response.data;

    $scope.getALl = function () {
      $scope.listAllSanPham = response.data;
      $scope.listAllSanPhamRam = [];
      $scope.listAllSanPhamMain = [];
      $scope.listAllSanPhamCard = [];
      $scope.listAllSanPhamChip = [];
    };
    $scope.locSanPhamMain = function () {
      $scope.listAllSanPham = response.data;
      for (var i = 0; i < $scope.listAllSanPham.length; i++) {
        if ($scope.listAllSanPham[i].loai == "MAIN") {
          $scope.listAllSanPhamMain.push(response.data[i]);
        }
      }
      $scope.listAllSanPhamRam = [];
      $scope.listAllSanPham = [];
      $scope.listAllSanPhamCard = [];
      $scope.listAllSanPhamChip = [];
    };
    $scope.locSanPhamRam = function () {
      $scope.listAllSanPham = response.data;
      for (var i = 0; i < $scope.listAllSanPham.length; i++) {
        if ($scope.listAllSanPham[i].loai == "RAM") {
          $scope.listAllSanPhamRam.push(response.data[i]);
        }
      }
      $scope.listAllSanPham = [];
      $scope.listAllSanPhamMain = [];
      $scope.listAllSanPhamCard = [];
      $scope.listAllSanPhamChip = [];
    };
    $scope.locSanPhamCard = function () {
      $scope.listAllSanPham = response.data;
      for (var i = 0; i < $scope.listAllSanPham.length; i++) {
        if ($scope.listAllSanPham[i].loai == "CARD") {
          $scope.listAllSanPhamCard.push(response.data[i]);
        }
      }
      $scope.listAllSanPham = [];
      $scope.listAllSanPhamMain = [];
      $scope.listAllSanPhamRam = [];
      $scope.listAllSanPhamChip = [];
    };
    $scope.locSanPhamChip = function () {
      $scope.listAllSanPham = response.data;
      for (var i = 0; i < $scope.listAllSanPham.length; i++) {
        if ($scope.listAllSanPham[i].loai == "CHIP") {
          $scope.listAllSanPhamChip.push(response.data[i]);
        }
      }
      $scope.listAllSanPham = [];
      $scope.listAllSanPhamMain = [];
      $scope.listAllSanPhamRam = [];
      $scope.listAllSanPhamCard = [];
    };
  });

  $scope.detailSanPham = function (index) {
    let SanPham = $scope.listAllSanPham[index];
    $scope.form_sanpham.id = SanPham.id;
    $scope.form_sanpham.moTa = SanPham.moTa;
    $scope.form_sanpham.price = SanPham.price;
    $scope.form_sanpham.image = SanPham.image;
    $scope.form_sanpham.loai = SanPham.loai;
    $scope.form_sanpham.name = SanPham.name;
    $scope.form_sanpham.trangThai = SanPham.trangThai;
    $scope.indexUpdate = index;
  };
  $scope.addSanPham = function (event) {
    if($scope.form_sanpham.name == ""){
      alert("TÊN TRỐNG");
    }else if($scope.form_sanpham.price == "" || $scope.form_sanpham.price <= 0){
      alert("GIÁ SAI TRỐNG");
    }else if($scope.form_sanpham.moTa == ""){
      alert("MÔ TẢ TRỐNG");
    }else if($scope.form_sanpham.image == ""){
      alert("HÌNH ẢNH TRỐNG");
    }else{
      alert("SẢN PHẨM ĐÃ ĐƯỢC THÊM VÀO DANH SÁCH SẢN PHẨM");
      event.preventDefault();
      $http.post(AllSanPhamAPI, $scope.form_sanpham).then(function (response) {
        $scope.listAllSanPham.push(response.data);
      });
    }
  };
  $scope.deleteSanPham = function (event, index) {
    event.preventDefault();
    let SanPham = $scope.listAllSanPham[index];
    let api = AllSanPhamAPI + "/" + SanPham.id;
    $http.delete(api).then(function (response) {
      $scope.listAllSanPham.splice(index, 1);
      alert("ĐÃ XÓA THÀNH CÔNG SẢN PHẨM");
    });
  };
  $scope.updateSanPham = function (event) {
    if($scope.form_sanpham.name == ""){
      alert("TÊN TRỐNG");
    }else if($scope.form_sanpham.price == "" || $scope.form_sanpham.price <= 0){
      alert("GIÁ SAI TRỐNG");
    }else if($scope.form_sanpham.moTa == ""){
      alert("MÔ TẢ TRỐNG");
    }else if($scope.form_sanpham.image == ""){
      alert("HÌNH ẢNH TRỐNG");
    }else{
      alert("SẢN PHẨM ĐÃ ĐƯỢC SỬA THÀNH CÔNG");
      let sanPham = $scope.listAllSanPham[$scope.indexUpdate];
      $http
        .put(AllSanPhamAPI + "/" + sanPham.id, $scope.form_sanpham)
        .then(function (response) {
          $scope.listAllSanPham[$scope.indexUpdate] = response.data;
      });
    }
     
  };

  $http.get(AllGioHangAPI).then(function (response) {
    $scope.listAllGioHang = response.data;
  });
  // THÊM SẢN PHẨM TẤT CẢ
  $scope.themSanPhamVaoGioHang = function (id) {
    for (let i = 0; i < $scope.listAllSanPham.length; i++) {
      if ($scope.listAllSanPham[i].id == id) {
        $scope.addGioHang = $scope.listAllSanPham[i];
      }
    }
    event.preventDefault();
    -$http.post(AllGioHangAPI, $scope.addGioHang).then(function (response) {
      $scope.listAllGioHang.push(response.data);
      alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  

    });
  };
  // THÊM SẢN PHẨM CHIP
  $scope.themSanPhamChipVaoGioHang = function (id) {
    for (let i = 0; i < $scope.listAllSanPhamChip.length; i++) {
      if ($scope.listAllSanPhamChip[i].id == id) {
        $scope.addChip = $scope.listAllSanPhamChip[i];
      }
    }
    event.preventDefault();
    $http.post(AllGioHangAPI, $scope.addChip).then(function (response) {
      $scope.listAllGioHang.push(response.data);
      alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  

    });
  };
  // THÊM SẢN PHẨM MAIN
  $scope.themSanPhamMainVaoGioHang = function (id) {
    for (let i = 0; i < $scope.listAllSanPhamMain.length; i++) {
      if ($scope.listAllSanPhamMain[i].id == id) {
        $scope.addMain = $scope.listAllSanPhamMain[i];
      }
    }
    event.preventDefault();
    $http.post(AllGioHangAPI, $scope.addMain).then(function (response) {
      $scope.listAllGioHang.push(response.data);
      alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  

    });
  };
  // THÊM SẢN PHẨM RAM
  $scope.themSanPhamRamVaoGioHang = function (id) {
    for (let i = 0; i < $scope.listAllSanPhamRam.length; i++) {
      if ($scope.listAllSanPhamRam[i].id == id) {
        $scope.addRam = $scope.listAllSanPhamRam[i];
      }
    }
    event.preventDefault();
    $http.post(AllGioHangAPI, $scope.addRam).then(function (response) {
      $scope.listAllGioHang.push(response.data);
      alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  

    });
  };
  // THÊM SẢN PHẨM CARD
  $scope.themSanPhamCardVaoGioHang = function (id) {
    for (let i = 0; i < $scope.listAllSanPhamCard.length; i++) {
      if ($scope.listAllSanPhamCard[i].id == id) {
        $scope.addCard = $scope.listAllSanPhamCard[i];
      }
    }
    event.preventDefault();
    $http.post(AllGioHangAPI, $scope.addCard).then(function (response) {
      $scope.listAllGioHang.push(response.data);
      alert("SẢN PHẨM ĐÃ THÊM VÀO GIỎ HÀNG");  

    });
  };
  //XÓA SẢN PHẨM BÊN MÀN GIỎ HÀNG
  $scope.xoaSanPhamGioHang = function (id) {
    alert("ĐÃ XÓA THÀNH CÔNG SẢN PHẨM");
    for (let i = 0; i < $scope.listAllGioHang.length; i++) {
      if ($scope.listAllGioHang[i].id == id) {
        let api = AllGioHangAPI + "/" + $scope.listAllGioHang[i].id;
        $http.delete(api).then(function (response) {
          $scope.listAllGioHang[i].splice(index, 1);
        });
      }
    }
  };
  $scope.sanPhamDaMua = function(){
    $scope.listAllSanPhamDaMua = [];
    $scope.listAllSanPhamTrongGio = [];
    alert("SẢN PHẨM MÀ BẠN ĐÃ MUA");

    $http.get(AllSanPhamDaMuaAPI).then(function (response) {
      $scope.listAllSanPhamDaMua = response.data;
    });
  }
  $scope.listAllSanPhamTrongGio = [];
  $http.get(AllGioHangAPI).then(function (response) {
    $scope.listAllSanPhamTrongGio = response.data;
  });
  $scope.sanPhamTrongGio= function(){
    $scope.listAllSanPhamDaMua = [];
    $scope.listAllSanPhamTrongGio = [];
    alert("SẢN PHẨM CÓ TRONG GIỎ HÀNG CỦA BẠN");


    $http.get(AllGioHangAPI).then(function (response) {
      $scope.listAllSanPhamTrongGio = response.data;
    });
  }
    //XÓA SẢN PHẨM BÊN MÀN GIỎ HÀNG
    $scope.xoaSanPhamDaMua = function (id) {
      alert("ĐÃ XÓA THÀNH CÔNG SẢN PHẨM");
      for (let i = 0; i < $scope.listAllSanPhamDaMua.length; i++) {
        if ($scope.listAllSanPhamDaMua[i].id == id) {
          let api = AllSanPhamDaMuaAPI + "/" + $scope.listAllSanPhamDaMua[i].id;
          $http.delete(api).then(function (response) {
            $scope.listAllSanPhamDaMua[i].splice(index, 1);
          });
        }
      }
    };

};
