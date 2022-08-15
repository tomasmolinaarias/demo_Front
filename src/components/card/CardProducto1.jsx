import { useEffect, useState } from "react";
import "../../App.scss";
import { getAllProducts } from "../../services/products";
import { prom } from "./calculo";
import * as FaIcons from "react-icons/fa";
const urlApiProducts = "https://app-scraping1.herokuapp.com/api/v1/product";

export const CardProducto1 = () => {
  const [storeOne, setStoreOne] = useState("");
  const [storeTwo, setStoreTwo] = useState("");
  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [priceOne, setPriceOne] = useState(0);
  const [priceTwo, setPriceTwo] = useState(0);
  const [variationOsbOne, setVariationOsbOne] = useState(0);
  const [variationOsbTwo, setVariationOsbTwo] = useState(0);
  // const filter = filterProduct1(products);

  useEffect(() => {
    getAllProducts(urlApiProducts).then((data) => {
      const orderDate = data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      const dataFilter = orderDate.filter(
        (element) => element.name.substring(0, 3).toUpperCase() === "OSB"
      );
      const storeFirst = dataFilter[dataFilter.length - 2].store;
      const storeSecond = dataFilter[dataFilter.length - 1].store;
      const nameFirst = dataFilter[dataFilter.length - 2].name;
      const nameSecond = dataFilter[dataFilter.length - 1].name;
      const priceFirst = dataFilter[dataFilter.length - 2].price;
      const priceSecond = dataFilter[dataFilter.length - 1].price;
      const promedioOsb = prom(data, "OSB", 3);
      const promedioTerciado = prom(data, "TERCIADO", 8);
      const numberOne = Number(priceFirst.replace(/[$.]/g, "").trim());
      const variationFirst = (
        ((numberOne - promedioOsb) / promedioOsb) *
        100
      ).toFixed(2);
      const numberTwo = Number(priceSecond.replace(/[$.]/g, "").trim());
      const variationSecond = (
        ((numberTwo - promedioOsb) / promedioOsb) *
        100
      ).toFixed(2);
      setStoreOne(storeFirst);
      setStoreTwo(storeSecond);
      setNameOne(nameFirst);
      setNameTwo(nameSecond);
      setPriceOne(priceFirst);
      setPriceTwo(priceSecond);
      setVariationOsbOne(variationFirst);
      setVariationOsbTwo(variationSecond);
    });
  }, []);

  return (
    <div className="row">
      {/* {filter.map((item) => ( */}
      <div className="mt-3 col col-ms-12 col-md">
        <div className="card text-bg-light ms-4 mt-3 mb-5 ">
          <h5 class="card-header d-flex justify-content-between">
            {storeOne}
            <span>
              {variationOsbOne > 0 ? (
                <FaIcons.FaSortUp className="me-2 text-success" />
              ) : (
                <FaIcons.FaSortDown className="me-2 text-danger" />
              )}
              {`${variationOsbOne} %`}
            </span>
          </h5>
          <div className="card-body">
            <div className="card-tittle"></div>
            <div className="card-text">{nameOne}</div>
            <div className="pricesOsb obs price card-text  mt-3 ">
              {priceOne}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 col col-ms-12 col-md">
        <div className="card text-bg-light ms-4 mt-3 mb-5 ">
          <h5 class="card-header d-flex justify-content-between">
            {storeTwo}
            <span>
              {variationOsbTwo > 0 ? (
                <FaIcons.FaSortUp className="me-2 text-success" />
              ) : (
                <FaIcons.FaSortDown className="me-2 text-danger" />
              )}
              {`${variationOsbTwo} %`}
            </span>
          </h5>
          <div className="card-body">
            <div className="card-tittle"></div>
            <div className="card-text">{nameTwo}</div>
            <div className="pricesOsb obs price card-text  mt-3 ">
              {priceTwo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
