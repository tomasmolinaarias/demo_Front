import React, { useEffect, useState } from "react";
import "../../App.scss";
import * as FaIcons from "react-icons/fa";

import { Product1 } from "./Product1.jsx";
import { ProductDos } from "./Producto2.jsx";

const urlApiProducts = "https://app-scraping1.herokuapp.com/api/v1/product";

export const Grafica = () => {
  const [Products, setProducts] = useState([]);

  const [Producto2, setProducto2] = useState(false);
  const [Btn, setBtn] = useState(true);

  const fetchProducts = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.log(error));
  };

  const cambioDeProduct = () => {
    setProducto2(true);
    setBtn(false);
  };
  const cambioButton = () => {
    setBtn(true);
    setProducto2(false);
  };

  useEffect(() => {
    fetchProducts(urlApiProducts);
  }, []);

  return (
    <div>
      <div className="text-center  mt-4 mb-1">
        <h3>
          Click para cambiar de producto:{"  "}
          {Btn ? (
            <span
              className="customButton"
              onClick={() => cambioDeProduct()}
            >
              Terciado
              <FaIcons.FaExchangeAlt className="ms-3" />
            </span>
          ) : (
            <span
              className="customButton"
              onClick={() => cambioButton()}
            >
              OSB
              <FaIcons.FaExchangeAlt className="ms-3" />
            </span>
          )}
        </h3>
      </div>
      {Producto2 ? (
        <ProductDos products={Products} />
      ) : (
        <Product1 products={Products} />
      )}
    </div>
  );
};
