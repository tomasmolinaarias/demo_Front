import React, { useEffect, useState } from "react";
import "../../App.scss";
import * as FaIcons from "react-icons/fa";

import { GraficaPromedial } from "./GraficaPromedial.jsx";
import { GraficoNormal } from "./GraficoNormal";

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
      <div className="text-center mt-3 mb-3">
        {Producto2 ? (
          <h1>Precios Actuales</h1>
        ) : (
          <h1>Promedio por producto de cada mes </h1>
        )}
        <h3 className="d-none d-md-block mb-4 mt-4">
          Click para cambiar el Grafico:
        </h3>
        {Btn ? (
          <span className="customButton h5 " onClick={() => cambioDeProduct()}>
            Grafico Normal
            <FaIcons.FaExchangeAlt className="ms-3" />
          </span>
        ) : (
          <span className="customButton h5 " onClick={() => cambioButton()}>
            Grafico Promediado
            <FaIcons.FaExchangeAlt className="ms-3" />
          </span>
        )}
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel  mt-4"
        data-bs-ride="carousel "
      >
        <div className="carousel-inner text-center">
          <div className="carousel-item  active">
            <div className="d-block ">
              {Producto2 ? (
                <GraficoNormal products={Products} />
              ) : (
                <GraficaPromedial products={Products} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
