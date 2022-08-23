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
      text: "Grafico de precios ",
    },
  },

  /*  maintainAspectRatio: false, */
};

export function GraficoNormal({ products = [] }) {
  const osb1 = products
    .filter(
      (e) =>
        e.name.substring(0, 3).toUpperCase() === "OSB" &&
        e.store === "falabella"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")))
    .sort(function (a, b) {
      return a - b;
    });

  const osb2 = products
    .filter(
      (e) =>
        e.name.substring(0, 3).toUpperCase() === "OSB" &&
        e.store === "constructor31"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));
  const terciado1 = products
    .filter(
      (e) =>
        e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
        e.store === "falabella"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));
  const terciado2 = products
    .filter(
      (e) =>
        e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
        e.store === "constructor31"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

  const fecha = products
    .map((e) => e.date)
    .map((e) => {
      const date = new Date(e);
      const months = [
        "ENE",
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

  const data = {
    labels,

    //AGREGAR DATOS FISTICIOS 2 DEL MISMO DIAS DE LOS GRAFICOS//

    datasets: [
      {
        label: " OSB / falabella ",
        data: osb1,
        borderColor: "#00B72C",
        backgroundColor: "#00B72C",
        color: "black",
      },
      {
        label: " OSB / constructor 31 ",
        data: osb2,
        borderColor: "#00A7FA",
        backgroundColor: "#00A7FA",
        color: "black",
      },
      {
        label: " Terciado  / falabella ",
        data: terciado1,
        borderColor: "#0FF100",
        backgroundColor: " #0FF100",
      },
      {
        label: " Terciado  / constructor 31 ",
        data: terciado2,
        borderColor: "#04F6F2",
        backgroundColor: "#04F6F2",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
