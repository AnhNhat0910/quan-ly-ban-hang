app = angular.module("admin-app",["ngRoute"]);

app.config(function ($routeProvider){
    $routeProvider
    .when("/category", {
        templateUrl: "/assets/admin/category/index.html",
        controller: "category-ctrl"
    })
     .when("/home", {
        templateUrl: "/assets/admin/home/index.html",
    })
    .when("/product",{
        templateUrl:"/assets/admin/product/index.html",
        controller:"product-ctrl"
    })
    .when("/authorize",{
        templateUrl:"/assets/admin/authority/index.html",
        controller:"authority-ctrl"
    })
    .when("/unauthorized",{
        templateUrl:"/assets/admin/authority/unauthorized.html",
        controller:"authority-ctrl"
    })
    
    .otherwise({
        template:"<h1>ADMIN</h1>"
    })
});