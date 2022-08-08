import React, { useEffect, useState } from "react";
import { CardProducto1 } from "./card/CardProducto1";
import { CardProducto2 } from "./card/CardProducto2";
import { CardPromedio } from "./card/CardPromedio";
const urlApiProducts = "https://app-scraping1.herokuapp.com/api/v1/product";

export const Productos = () => {
  const [Porducts, setProducts] = useState([]);

  const fetchProducts = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchProducts(urlApiProducts);
  }, []);

  return (
    <div className="conatiner">
      <div className="container mt-5">
        <CardPromedio products={Porducts} />
      </div>
      <div className="container mt-3">
        <h2 className="my-4">Producto: OSB 11MM 1.22X2.44MT</h2>
        <hr />
        <CardProducto1 products={Porducts} />
        <h2 className="my-4">
          Producto: TERCIADO ESTRUCTURAL 15MM 1.22X2.44mt{" "}
        </h2>
        <hr />
        <CardProducto2 products={Porducts} />
      </div>
    </div>
  );
};
