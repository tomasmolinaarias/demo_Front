import React from "react";
import "../../App.scss";
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
      to: 0.1,
      loop: true,
    },
  },
};

export const Timeseries = ({ productos = [] }) => {
  const product = [];

  //filtramois
  const OsbConstructor = () => {
    const periodo1 = productos
      .filter(
        (e) => e.name.substring(0, 3) === "OSB" && e.store === "constructor31"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "")));
    return periodo1;
  };

  const OsbFalabella = () => {
    const periodo1 = productos
      .filter(
        (e) => e.name.substring(0, 3) === "OSB" && e.store === "falabella"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "")));
    return periodo1;
  };

  const terciadoConstructor = () => {
    const periodo1 = productos
      .filter(
        (e) =>
          e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
          e.store === "constructor31"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "")));
    return periodo1;
  };
  const terciadoFalabella = () => {
    const periodo1 = productos
      .filter(
        (e) =>
          e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
          e.store === "falabella"
      )
      .map((e) => parseInt(e.price.replace(/[$.]/g, "")));
    return periodo1;
  };
  //hacemos serie de tiempo
  //osb

  const averageOsbC = () => {
    const datos = OsbConstructor();
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
      store: "constructor 31",
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
      store: "constructor 31",
    };

    const average2 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F2)}`,
      date: "2022-3-30",
      store: "constructor 31",
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
      store: "constructor 31",
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
      store: "constructor 31",
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
      store: "constructor 31",
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
      store: "constructor 31",
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
      store: "constructor 31",
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
      store: "constructor 31",
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

  const averageOsbF = () => {
    const datos = OsbFalabella();
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
      store: "falabella",
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
      store: "falabella",
    };

    const average2 = {
      name: "OSB",
      price: ` $ ${Math.trunc(F2)}`,
      date: "2022-3-30",
      store: "falabella",
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
      store: "falabella",
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
      store: "falabella",
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
      store: "falabella",
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
      store: "falabella",
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
      store: "falabella",
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
      store: "falabella",
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
  //terciado
  const averageTerciadoF = () => {
    const datos = terciadoFalabella();
    // alfa 1
    const alfa = 1;

    //====periodo1====
    let price1 = datos[0];
    const S1 = price1;
    let formatear1 = Math.trunc(price1);
    const average0 = {
      name: "TERCIADO",
      price: ` $ ${formatear1}`,
      date: "2022-1-30",
      store: "falabella",
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
      price: ` $ ${formatear1}`,
      date: "2022-2-28",
      store: "falabella",
    };

    const average2 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F2)}`,
      date: "2022-3-30",
      store: "falabella",
    };
    //=== periodo3 ===
    let priceFormat3 = datos[2];
    const S3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const S_3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const a3 = 2 * S3 - S_3;

    const b3 = alfa * (S3 - S_3 / 1 - alfa);

    const F3 = a3 + b3;

    const average3 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F3)}`,
      date: "2022-4-30",
      store: "falabella",
    };
    //=== periodo4 ===
    let priceFormat4 = datos[3];
    const S4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const S_4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const a4 = 2 * S4 - S_4;

    const b4 = alfa * (S4 - S_4 / 1 - alfa);

    const F4 = a4 + b4;

    const average4 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F4)}`,
      date: "2022-5-30",
      store: "falabella",
    };
    // pronostico periodo 5
    let priceFormat5 = datos[4];
    const S5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const S_5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const a5 = 2 * S5 - S_5;

    const b5 = alfa * (S5 - S_5 / 1 - alfa);

    const F5 = a5 + b5;
    const average5 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F5)}`,
      date: "2022-6-30",
      store: "falabella",
    };
    //periodo 6
    let priceFormat6 = datos[5];
    const S6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const S_6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const a6 = 2 * S6 - S_6;

    const b6 = alfa * (S6 - S_6 / 1 - alfa);

    const F6 = a6 + b6;
    const average6 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F6)}`,
      date: "2022-7-30",
      store: "falabella",
    };
    //periodo 7
    let priceFormat7 = datos[6];

    const S7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const S_7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const a7 = 2 * S7 - S_7;

    const b7 = alfa * (S7 - S_7 / 1 - alfa);

    const F7 = a7 + b7;
    const average7 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F7)}`,
      date: "2022-8-30",
      store: "falabella",
    };
    //periodo 8
    let priceFormat8 = datos[7];

    const S8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const S_8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const a8 = 2 * S8 - S_8;

    const b8 = alfa * (S8 - S_8 / 1 - alfa);

    const F8 = a8 + b8;

    const final = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F8)}`,
      date: "2022-9-30",
      store: "falabella",
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
  const averageTerciadoC = () => {
    const datos = terciadoConstructor();
    // alfa 1
    const alfa = 1;

    //====periodo1====
    let price1 = datos[0];
    const S1 = price1;
    let formatear1 = Math.trunc(price1);
    const average0 = {
      name: "TERCIADO",
      price: ` $ ${formatear1}`,
      date: "2022-1-30",
      store: "constructor31",
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
      price: ` $ ${formatear1}`,
      date: "2022-2-28",
      store: "constructor31",
    };

    const average2 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F2)}`,
      date: "2022-3-30",
      store: "constructor31",
    };
    //=== periodo3 ===
    let priceFormat3 = datos[2];
    const S3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const S_3 = alfa * priceFormat3 + (1 - alfa) * S2;

    const a3 = 2 * S3 - S_3;

    const b3 = alfa * (S3 - S_3 / 1 - alfa);

    const F3 = a3 + b3;

    const average3 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F3)}`,
      date: "2022-4-30",
      store: "constructor31",
    };
    //=== periodo4 ===
    let priceFormat4 = datos[3];
    const S4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const S_4 = alfa * priceFormat4 + (1 - alfa) * S3;

    const a4 = 2 * S4 - S_4;

    const b4 = alfa * (S4 - S_4 / 1 - alfa);

    const F4 = a4 + b4;

    const average4 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F4)}`,
      date: "2022-5-30",
      store: "constructor31",
    };
    // pronostico periodo 5
    let priceFormat5 = datos[4];
    const S5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const S_5 = alfa * priceFormat5 + (1 - alfa) * S4;

    const a5 = 2 * S5 - S_5;

    const b5 = alfa * (S5 - S_5 / 1 - alfa);

    const F5 = a5 + b5;
    const average5 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F5)}`,
      date: "2022-6-30",
      store: "constructor31",
    };
    //periodo 6
    let priceFormat6 = datos[5];
    const S6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const S_6 = alfa * priceFormat6 + (1 - alfa) * S5;

    const a6 = 2 * S6 - S_6;

    const b6 = alfa * (S6 - S_6 / 1 - alfa);

    const F6 = a6 + b6;
    const average6 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F6)}`,
      date: "2022-7-30",
      store: "constructor31",
    };
    //periodo 7
    let priceFormat7 = datos[6];

    const S7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const S_7 = alfa * priceFormat7 + (1 - alfa) * S6;

    const a7 = 2 * S7 - S_7;

    const b7 = alfa * (S7 - S_7 / 1 - alfa);

    const F7 = a7 + b7;
    const average7 = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F7)}`,
      date: "2022-8-30",
      store: "constructor31",
    };
    //periodo 8
    let priceFormat8 = datos[7];

    const S8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const S_8 = alfa * priceFormat8 + (1 - alfa) * S7;

    const a8 = 2 * S8 - S_8;

    const b8 = alfa * (S8 - S_8 / 1 - alfa);

    const F8 = a8 + b8;

    const final = {
      name: "TERCIADO",
      price: ` $ ${Math.trunc(F8)}`,
      date: "2022-9-30",
      store: "constructor31",
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
  //ejecutamos la funcion
  averageOsbC();
  averageOsbF();
  averageTerciadoC();
  averageTerciadoF();
  //filtramos los datos y limpiamos los prices
  //osb
  const OsbC = product
    .filter(
      (e) =>
        e.name.substring(0, 3).toUpperCase() === "OSB" &&
        e.store === "constructor 31"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));
  const Osbf = product
    .filter(
      (e) =>
        e.name.substring(0, 3).toUpperCase() === "OSB" &&
        e.store === "falabella"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "").trim("")));

  //terciado
  const terciadoC = product
    .filter(
      (e) =>
        e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
        e.store === "constructor31"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "")));
  const terciadoF = product
    .filter(
      (e) =>
        e.name.substring(0, 8).toUpperCase() === "TERCIADO" &&
        e.store === "falabella"
    )
    .map((e) => parseInt(e.price.replace(/[$.]/g, "")));

  // == fecha
  const fecha = product
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
        data: Osbf,
        borderColor: "#00B72C",
        backgroundColor: "#00B72C",
        color: "black",
      },
      {
        label: " OSB / constructor 31 ",
        data: OsbC,
        borderColor: "#00A7FA",
        backgroundColor: "#00A7FA",
        color: "black",
      },
      {
        label: " Terciado  / falabella ",
        data: terciadoF,
        borderColor: "#0FF100",
        backgroundColor: " #0FF100",
      },
      {
        label: " Terciado  / constructor 31 ",
        data: terciadoC,
        borderColor: "#04F6F2",
        backgroundColor: "#04F6F2",
      },
    ],
  };

  return <Line options={options} data={data} />;
};
