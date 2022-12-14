import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleHideProduct = () => {
    console.log("handleHideProduct");
    setIsProductsShowVisible(false);
  };

  const handleUpdateProduct = (id, params, successCallback) => {
    +console.log("handleUpdateProduct", params);
    +axios.patch(`http://localhost:3000/products/${id}.json`, params).then((response) => {
      setProducts(
        products.map((product) => {
          if (product.id === response.data.id) {
            return response.data;
          } else {
            return product;
          }
        })
      );
      successCallback();
      handleHideProduct();
    });
  };

  const handleDestroyProduct = (product) => {
    console.log("handleDestroyProduct", product);
    axios.delete("http://localhost:3000/products/${photo.id}.json").then((response) => {
      setProducts(products.filter((p) => p.id !== product.id));
      handleHideProduct();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <h1> Welcome to React!</h1>
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} />
      <Modal show={isProductsShowVisible} onClose={handleHideProduct}>
        <ProductsShow
          product={currentProduct}
          onUpdateProduct={handleUpdateProduct}
          onDestroyProduct={handleDestroyProduct}
        />
      </Modal>
    </div>
  );
}
