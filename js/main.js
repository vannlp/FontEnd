// import component from "./component.js";
import router from "./web.js";
import { getProduct } from "./api.js";

let app = angular.module("myApp", ["ngRoute"]);

// component(app);

router(app);

app.controller("MainCtrl", async function ($scope, $http) {
  $scope.name = "fuck you";

  let res = await getProduct($http);
  $scope.data = res.data;

  console.log($scope.data);
})
