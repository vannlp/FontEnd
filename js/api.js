function getProduct($http) {
  return $http.get("http://localhost:3000/products");
}

export { getProduct };
