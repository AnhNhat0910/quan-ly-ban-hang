app.controller("category-ctrl", function ($scope, $http) {
    $scope.items = [];
    $scope.cates = [];
    $scope.form = {};

    $scope.initialize = function () {
        //load categorys
        $http.get("/rest/categories").then(resp => {
            $scope.items = resp.data;
            
        })
    }
    //khởi đầu
    $scope.initialize();

    //Xóa form
    $scope.reset = function () {
        $scope.form = {
            id: '',
            name: ''
        }
        
    }
    //Hiện thị lên form
    $scope.edit = function (item) {
        $scope.form = angular.copy(item);
        $(".nav-tabs a:eq(0)").tab('show');
       
    }
    //Thêm mới sản phẩm
    $scope.create = function () {
        var item = angular.copy($scope.form);
        $http.post('/rest/categories', item).then(resp => {
            $scope.items.push(resp.data);
            $scope.reset();
            alert("Thêm mới loại sản phẩm thành công");
            $(".nav-tabs a:eq(1)").tab('show');
        }).catch(error => {
            alert("Lỗi thêm mới loại sản phẩm")
            console.log("Error", error);
        })
    }
    //Cập nhật sản phẩm
    $scope.update = function () {
        var item = angular.copy($scope.form);
        $http.put(`/rest/categories/${item.id}`, item).then(resp => {
            var index = $scope.items.findIndex(p => p.id == item.id);
            $scope.items[index] = item;
            alert("Cập nhật loại sản phẩm thành công");
            $(".nav-tabs a:eq(1)").tab('show');
        }).catch(error => {
            alert("Lỗi cập nhật loại sản phẩm")
            console.log("Error", error);
        })
    }
    //Xóa sản phẩm 
    $scope.delete = function(item){
        var item = angular.copy($scope.form);
        $http.delete(`/rest/categories/${item.id}`).then(resp => {
            var index = $scope.items.findIndex( p => p.id == item.id);
            $scope.items.splice(index,1);
            $scope.reset();
            alert('Xóa loại sản phẩm thành công');
 
        }).catch(error => {
            alert('Lỗi xóa loại sản phẩm');
            console.log("Error",error);
        });
    }


    
});