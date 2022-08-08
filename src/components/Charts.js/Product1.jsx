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

export function Product1({ products = [] }) {
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

  const price2Constructor = products
    .filter(
      (e) => e.name.substring(0, 3) === "OSB" && e.store === "constructor31"
    )
    .map((e) => e.price.replace(/[$.]/g, "").trim(""))
    .sort((a, b) => a - b);

  /* Falabella */

  const price2Falabella = products
    .filter((e) => e.name.substring(0, 3) === "OSB" && e.store === "falabella")
    .map((e) => e.price.replace(/[$.]/g, "").trim(""))
    .sort((a, b) => a - b);

  const data = {
    labels,

    //AGREGAR DATOS FISTICIOS 2 DEL MISMO DIAS DE LOS GRAFICOS//

    datasets: [
      {
        label: "OSB /  constructor 31",
        data: price2Constructor,
        borderColor: "#8cff8c",
        backgroundColor: "#00ff00",
      },

      {
        label: "OSB / falabella",
        data: price2Falabella,
        borderColor: "#cc8080",
        backgroundColor: " #990000",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
