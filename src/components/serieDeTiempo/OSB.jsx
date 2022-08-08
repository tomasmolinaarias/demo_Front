import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Productos en tienda",
    },
  },
  animations: {
    tension: {
      duration: 4000,
      easing: "linear",
      from: 0.7,
      to: 0.5,
      loop: true,
    },
  },
};

const Datos = require("./JSON/Datos.json");

const productos = require("../../JSON/productos.json");

export const Osb = () => {
  const product = [];

  console.log(productos);

  product.push(...productos);

  const OsbConstructor = () => {
    const periodo1 = Datos.filter(
      (e) => e.name.substring(0, 3) === "OSB" && e.store === "constructor31"
    );
    return periodo1;
  };
  const OsbFalabella = () => {
    const periodo1 = Datos.filter(
      (e) => e.name.substring(0, 3) === "OSB" && e.store === "falabella"
    );
    return periodo1;
  };
  const PronosticoOSBCNT = () => {
    let alfa = 1;
    const datos = OsbConstructor();

    // alfa 1
    //====periodo1====
    let price2 = parseInt(datos[0].price.replace(/[$.]/g, ""));
    const S1 = price2;

    //====periodo2====
    let priceFormat = parseInt(datos[1].price.replace(/[$.]/g, ""));
    const S2 = alfa * priceFormat + (1 - alfa) * S1;

    const S_2 = alfa * priceFormat + (1 - alfa) * S1;

    const a2 = 2 * S2 - S_2;

    const b2 = alfa * (S2 - S_2 / 1 - alfa);

    const F = a2 + b2;
    const price = `$ ${F}`;
    const final = {
      store: datos[0].store,
      name: datos[0].name,
      price,
      date: "2022-9-30",
    };
    product.push(final);

    return product;
  };

  const PronosticoOSBfalabella = () => {
    const datos = OsbFalabella();
    // alfa 1
    let alfa = 1;
    //====periodo1====
    let price2 = parseInt(datos[0].price.replace(/[$.]/g, ""));
    const S1 = price2;

    //====periodo2====
    let priceFormat = parseInt(datos[1].price.replace(/[$.]/g, ""));
    const S2 = alfa * priceFormat + (1 - alfa) * S1;

    const S_2 = alfa * priceFormat + (1 - alfa) * S1;

    const a2 = 2 * S2 - S_2;

    const b2 = alfa * (S2 - S_2 / 1 - alfa);

    const F = a2 + b2;
    const price = `$ ${F}`;

    const final = {
      store: datos[0].store,
      name: datos[0].name,
      price,
      date: "2022-9-30",
    };
    product.push(final);

    return product;
  };

  PronosticoOSBfalabella();
  PronosticoOSBCNT();
  console.log(product);
  const fecha = product
    .map((e) => e.date)
    .map((e) => {
      const date = new Date(e);
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];
      let formatted_date =
        date.getDate() +
        "-" +
        months[date.getMonth()] +
        "-" +
        date.getFullYear();

      return formatted_date;
    })
    .sort((a, b) => new Date(a) - new Date(b));

  var limpiarFecha = [...new Set(fecha)];

  const labels = limpiarFecha;

  const OSBConstructor = product
    .filter(
      (e) => e.name.substring(0, 3) === "OSB" && e.store === "constructor31"
    )
    .map((e) => e.price.replace(/[$.]/g, "").trim(""))
    .sort((a, b) => a - b);

  // /* Falabella */

  const OSBfalabella = product
    .filter((e) => e.name.substring(0, 3) === "OSB" && e.store === "falabella")
    .map((e) => e.price.replace(/[$.]/g, "").trim(""))
    .sort((a, b) => a - b);

  const data = {
    labels,

    //AGREGAR DATOS FISTICIOS 2 DEL MISMO DIAS DE LOS GRAFICOS//

    datasets: [
      {
        label: "OSB /  constructor 31",
        data: OSBConstructor,
        borderColor: "#cc8080",
        backgroundColor: " #990000",
      },
      {
        label: "OSB / falabella",
        data: OSBfalabella,
        borderColor: "#8cff8c",
        backgroundColor: "#00ff00",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
