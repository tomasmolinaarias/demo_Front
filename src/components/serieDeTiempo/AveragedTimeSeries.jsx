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
      from: 0.2,
      to: 0.5,
      loop: true,
    },
  },
};

export const AveragedTimeSeries = ({ productos = [] }) => {
  const product = [];
  // ===================== producto1

  const Terciado = () => {
    const priceStore1 = productos
      .filter(
        (e) =>
          e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
          e.store === "falabella"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

    const priceStore2 = productos
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

  const averageTerciado = () => {
    const datos = Terciado();
    // alfa 1
    const alfa = 1;

    //====periodo1====
    let price1 = datos[0];
    const S1 = price1;

    const average0 = {
      name: "TERCIADO",
      price: ` $ ${price1}`,
      date: "2022-1-30",
    };

    //====periodo2====
    let priceFormat2 = datos[1];
    const S2 = alfa * priceFormat2 + (1 - alfa) * S1;

    const S_2 = alfa * priceFormat2 + (1 - alfa) * S1;

    const a2 = 2 * S2 - S_2;

    const b2 = 1 * (S2 - S_2 / 1 - alfa);

    const F2 = a2 + b2;

    const average1 = {
      name: "TERCIADO",
      price: ` $ ${price1}`,
      date: "2022-2-28",
    };

    const average2 = { name: "TERCIADO", price: ` $ ${F2}`, date: "2022-3-30" };
    //=== periodo3 ===
    let priceFormat3 = datos[2];
    const S3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const S_3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const a3 = 2 * S3 - S_3;

    const b3 = alfa * (S3 - S_3 / 1 - alfa);

    const F3 = a3 + b3;

    const average3 = { name: "TERCIADO", price: ` $ ${F3}`, date: "2022-4-30" };
    //=== periodo4 ===
    let priceFormat4 = datos[3];
    const S4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const S_4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const a4 = 2 * S4 - S_4;

    const b4 = alfa * (S4 - S_4 / 1 - alfa);

    const F4 = a4 + b4;

    const average4 = { name: "TERCIADO", price: ` $ ${F4}`, date: "2022-5-30" };
    // pronostico periodo 5
    let priceFormat5 = datos[4];
    const S5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const S_5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const a5 = 2 * S5 - S_5;

    const b5 = alfa * (S5 - S_5 / 1 - alfa);

    const F5 = a5 + b5;
    const average5 = { name: "TERCIADO", price: ` $ ${F5}`, date: "2022-6-30" };
    //periodo 6
    let priceFormat6 = datos[5];
    const S6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const S_6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const a6 = 2 * S6 - S_6;

    const b6 = alfa * (S6 - S_6 / 1 - alfa);

    const F6 = a6 + b6;
    const average6 = { name: "TERCIADO", price: ` $ ${F6}`, date: "2022-7-30" };
    //periodo 7
    let priceFormat7 = datos[6];

    const S7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const S_7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const a7 = 2 * S7 - S_7;

    const b7 = alfa * (S7 - S_7 / 1 - alfa);

    const F7 = a7 + b7;
    const average7 = { name: "TERCIADO", price: ` $ ${F7}`, date: "2022-8-30" };
    //periodo 8
    let priceFormat8 = datos[7];

    const S8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const S_8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const a8 = 2 * S8 - S_8;

    const b8 = alfa * (S8 - S_8 / 1 - alfa);

    const F8 = a8 + b8;

    const final = {
      name: "TERCIADO",
      price: ` $ ${F8}`,
      date: "2022-9-30",
    };

    product.push(
      average0,
      average1,
      average2,
      average3,
      average4,
      average5,
      average6,
      average7,
      final
    );
    return product;
  };

  //=========== producto 2

  const osb = () => {
    const priceStore1 = productos
      .filter(
        (e) =>
          e.name.substring(0, 3).toUpperCase() === "OSB" &&
          e.store === "falabella"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

    const priceStore2 = productos
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

  const averageOsb = () => {
    const datos = osb();
    // alfa 1
    const alfa = 1;

    //====periodo1====
    let price1 = datos[0];
    const S1 = price1;
    let formatear1 = Math.trunc(price1);
    const average0 = {
      name: "OSB",
      price: ` $ ${formatear1}`,
      date: "2022-1-30",
    };

    //====periodo2====
    let priceFormat2 = datos[1];
    const S2 = alfa * priceFormat2 + (1 - alfa) * S1;

    const S_2 = alfa * priceFormat2 + (1 - alfa) * S1;

    const a2 = 2 * S2 - S_2;

    const b2 = 1 * (S2 - S_2 / 1 - alfa);

    const F2 = a2 + b2;

    const average1 = {
      name: "OSB",
      price: ` $ ${formatear1}`,
      date: "2022-2-28",
    };

    const average2 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F2)}`,
      date: "2022-3-30",
    };
    //=== periodo3 ===
    let priceFormat3 = datos[2];
    const S3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const S_3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const a3 = 2 * S3 - S_3;

    const b3 = alfa * (S3 - S_3 / 1 - alfa);

    const F3 = a3 + b3;

    const average3 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F3)}`,
      date: "2022-4-30",
    };
    //=== periodo4 ===
    let priceFormat4 = datos[3];
    const S4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const S_4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const a4 = 2 * S4 - S_4;

    const b4 = alfa * (S4 - S_4 / 1 - alfa);

    const F4 = a4 + b4;

    const average4 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F4)}`,
      date: "2022-5-30",
    };
    // pronostico periodo 5
    let priceFormat5 = datos[4];
    const S5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const S_5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const a5 = 2 * S5 - S_5;

    const b5 = alfa * (S5 - S_5 / 1 - alfa);

    const F5 = a5 + b5;
    const average5 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F5)}`,
      date: "2022-6-30",
    };
    //periodo 6
    let priceFormat6 = datos[5];
    const S6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const S_6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const a6 = 2 * S6 - S_6;

    const b6 = alfa * (S6 - S_6 / 1 - alfa);

    const F6 = a6 + b6;
    const average6 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F6)}`,
      date: "2022-7-30",
    };
    //periodo 7
    let priceFormat7 = datos[6];

    const S7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const S_7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const a7 = 2 * S7 - S_7;

    const b7 = alfa * (S7 - S_7 / 1 - alfa);

    const F7 = a7 + b7;
    const average7 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F7)}`,
      date: "2022-8-30",
    };
    //periodo 8
    let priceFormat8 = datos[7];

    const S8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const S_8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const a8 = 2 * S8 - S_8;

    const b8 = alfa * (S8 - S_8 / 1 - alfa);

    const F8 = a8 + b8;

    const final = {
      name: "OSB",
      price: ` $ ${Math.trunc(F8)}`,
      date: "2022-9-30",
    };

    product.push(
      average0,
      average1,
      average2,
      average3,
      average4,
      average5,
      average6,
      average7,
      final
    );

    return product;
  };

  averageOsb();

  averageTerciado();

  const fecha = product
    .map((e) => e.date)
    .map((e) => {
      const date = new Date(e);
      const months = [
        "EN",
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

  const dataPricesTerciado = product
    .filter((e) => e.name.substring(0, 8).toUpperCase() === "TERCIADO")
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));
  const dataPricesOSB = product
    .filter((e) => e.name.substring(0, 3).toUpperCase() === "OSB")
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

  const labels = limpiarFecha;

  //AGREGAR DATOS FISTICIOS 2 DEL MISMO DIAS DE LOS GRAFICOS//
  const data = {
    labels,
    datasets: [
      {
        label: "Terciado",
        data: dataPricesTerciado,
        borderColor: "#cc8080",
        backgroundColor: " #990000",
      },
      {
        label: "OSB / falabella",
        data: dataPricesOSB,
        borderColor: "#8cff8c",
        backgroundColor: "#00ff00",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
