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
import { osb, terciados } from "./promedio";

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
  const Terciados = terciados(products);
  const Osb = osb(products);
  const data = {
    labels,

    //AGREGAR DATOS FISTICIOS 2 DEL MISMO DIAS DE LOS GRAFICOS//

    datasets: [
      {
        label: "Terciado / Promedio de las Tiendas",
        data: Terciados,
        borderColor: "#8cff8c",
        backgroundColor: "#00ff00",
      },
      {
        label: "Osb / Promedio de las Tiendas",
        data: Osb,
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
