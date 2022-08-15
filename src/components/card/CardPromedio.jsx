import * as FaIcons from "react-icons/fa";
import React from "react";
import { useEffect, useState } from "react";
import { prom } from "./calculo";
import { getAllProducts } from "../../services/products";

const urlApiProducts = "https://app-scraping1.herokuapp.com/api/v1/product";

export const CardPromedio = () => {
  const [averageOsb, setAverageOsb] = useState(0);
  const [averageTerciado, setAverageTerciado] = useState(0);

  useEffect(() => {
    getAllProducts(urlApiProducts).then((data) => {
      const promedioOsb = prom(data, "OSB", 3);
      const promedioTerciado = prom(data, "TERCIADO", 8);
      setAverageOsb(promedioOsb);
      setAverageTerciado(promedioTerciado);
    });
  }, []);

  return (
    <div className="row">
      <div className="mt-3 col col-ms-12 col-md">
        <div className="card text-bg-light ms-4 mt-3 mb-5">
          <h5 className="card-header">
            <FaIcons.FaSwatchbook className="me-2" />
            Promedio OSB
          </h5>
          <div className="card-body">
            <div
              className="card-text"
              id="averageOne"
            >{`$ ${new Intl.NumberFormat("de-DE").format(averageOsb)}`}</div>
          </div>
        </div>
      </div>

      <div className="mt-3 col col-ms-12 col-md">
        <div className="card text-bg-light ms-4 mt-3 mb-5 ">
          <h5 className="card-header">
            <FaIcons.FaSwatchbook className="me-2" />
            Promedio Terciado
          </h5>
          <div className="card-body">
            <div
              className="card-text"
              id="averageTwo"
            >{`$ ${new Intl.NumberFormat("de-DE").format(
              averageTerciado
            )}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
