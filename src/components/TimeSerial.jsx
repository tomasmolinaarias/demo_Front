import React, { useEffect, useState } from "react";

import * as FaIcons from "react-icons/fa";

import { Osb } from "./serieDeTiempo/OSB";
import { TERCIADO } from "./serieDeTiempo/TERCIADO";

export const TimeSerial = () => {
  const [Producto2, setProducto2] = useState(false);
  const [Btn, setBtn] = useState(true);

  const cambioDeProduct = () => {
    setProducto2(true);
    setBtn(false);
  };
  const cambioButton = () => {
    setBtn(true);
    setProducto2(false);
  };

  return (
    <div>
      <div className="text-center  mt-4 mb-1">
        <h3>
          Click para cambiar de producto:{"  "}
          {Btn ? (
            <span className="customButton" onClick={() => cambioDeProduct()}>
              Terciado
              <FaIcons.FaExchangeAlt className="ms-3" />
            </span>
          ) : (
            <span className="customButton" onClick={() => cambioButton()}>
              OSB
              <FaIcons.FaExchangeAlt className="ms-3" />
            </span>
          )}
        </h3>
      </div>
      {Producto2 ? <TERCIADO /> : <Osb />}
    </div>
  );
};
