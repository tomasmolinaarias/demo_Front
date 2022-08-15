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
      text: "Grafico con los precios promediado",
    },
  },
};

export function GraficaPromedial({ products = [] }) {
  const fecha = products
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
      let formatted_date = months[date.getMonth()] + "-" + date.getFullYear();

      return formatted_date;
    })
    .sort((a, b) => new Date(a) - new Date(b));

  var limpiarFecha = [...new Set(fecha)];

  const labels = limpiarFecha;

  const Terciados = () => {
    const priceStore1 = products
      .filter(
        (e) =>
          e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
          e.store === "falabella"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

    const priceStore2 = products
      .filter(
        (e) =>
          e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
          e.store === "constructor31"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

    const average = () => {
      const average1 = (priceStore1[0] + priceStore2[0]) / 2;
      const average2 = (priceStore1[1] + priceStore2[1]) / 2;
      const average3 = (priceStore1[2] + priceStore2[2]) / 2;
      const average4 = (priceStore1[3] + priceStore2[3]) / 2;
      const average5 = (priceStore1[4] + priceStore2[4]) / 2;
      const average6 = (priceStore1[5] + priceStore2[5]) / 2;
      const average7 = (priceStore1[6] + priceStore2[6]) / 2;
      const average8 = (priceStore1[7] + priceStore2[7]) / 2;

      const Terciadoaverages = [
        average1,
        average2,
        average3,
        average4,
        average5,
        average6,
        average7,
        average8,
      ];

      return Terciadoaverages;
    };

    let prom = average();
    return prom;
  };

  const osb = () => {
    const priceStore1 = products
      .filter(
        (e) =>
          e.name.substring(0, 3).toUpperCase() === "OSB" &&
          e.store === "falabella"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

    const priceStore2 = products
      .filter(
        (e) =>
          e.name.substring(0, 3).toUpperCase() === "OSB" &&
          e.store === "constructor31"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

    const average = () => {
      const average1 = (priceStore1[0] + priceStore2[0]) / 2;
      const average2 = (priceStore1[1] + priceStore2[1]) / 2;
      const average3 = (priceStore1[2] + priceStore2[2]) / 2;
      const average4 = (priceStore1[3] + priceStore2[3]) / 2;
      const average5 = (priceStore1[4] + priceStore2[4]) / 2;
      const average6 = (priceStore1[5] + priceStore2[5]) / 2;
      const average7 = (priceStore1[6] + priceStore2[6]) / 2;
      const average8 = (priceStore1[7] + priceStore2[7]) / 2;

      const osbAverages = [
        average1,
        average2,
        average3,
        average4,
        average5,
        average6,
        average7,
        average8,
      ];

      return osbAverages;
    };

    let prom = average();
    return prom;
  };

  const TerciadoAverages = Terciados();
  const osbAverages = osb();
  const data = {
    labels,

    //AGREGAR DATOS FISTICIOS 2 DEL MISMO DIAS DE LOS GRAFICOS//

    datasets: [
      {
        label: "Terciado / Promedio de las Tiendas",
        data: TerciadoAverages,
        borderColor: "#8cff8c",
        backgroundColor: "#00ff00",
      },
      {
        label: "Osb / Promedio de las Tiendas",
        data: osbAverages,
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
