import { useEffect, useState } from "react"
import "../../App.scss";
import { getAllProducts } from '../../services/products'
import { prom } from './calculo'
import * as FaIcons from "react-icons/fa";
const urlApiProducts = "https://app-scraping1.herokuapp.com/api/v1/product"

export const CardProducto2 = () => {
  const [storeOne, setStoreOne] = useState('')
  const [storeTwo, setStoreTwo] = useState('')
  const [nameOne, setNameOne] = useState('')
  const [nameTwo, setNameTwo] = useState('')
  const [priceOne, setPriceOne] = useState(0)
  const [priceTwo, setPriceTwo] = useState(0)
  const [variationOsbOne, setVariationOsbOne] = useState(0)
  const [variationOsbTwo, setVariationOsbTwo] = useState(0)
  // const filter = filterProduct1(products);

  useEffect(() => {
    getAllProducts(urlApiProducts).then((data) => {
      const orderDate = data.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
      const dataFilter = orderDate.filter(
        (element) =>
        element.name.substring(0, 8).toUpperCase() === "TERCIADO");
      const storeFirst = dataFilter[dataFilter.length - 2].store
      const storeSecond = dataFilter[dataFilter.length - 1].store
      const nameFirst = dataFilter[dataFilter.length - 2].name
      const nameSecond = dataFilter[dataFilter.length - 1].name
      const priceFirst = dataFilter[dataFilter.length - 2].price
      const priceSecond = dataFilter[dataFilter.length - 1].price
      const promedioOsb = prom(data, 'OSB', 3)
      const promedioTerciado = prom(data, 'TERCIADO', 8)
      const numberOne = Number(priceFirst.replace(/[$.]/g, "").trim())
      const variationFirst = (((numberOne - promedioTerciado) / promedioTerciado) * 100).toFixed(2)
      const numberTwo = Number(priceSecond.replace(/[$.]/g, "").trim())
      const variationSecond = (((numberTwo - promedioTerciado) / promedioTerciado) * 100).toFixed(2)
      setStoreOne(storeFirst)
      setStoreTwo(storeSecond)
      setNameOne(nameFirst)
      setNameTwo(nameSecond)
      setPriceOne(priceFirst)
      setPriceTwo(priceSecond)
      setVariationOsbOne(variationFirst)
      setVariationOsbTwo(variationSecond)
      
      console.log(priceSecond)
    })
    // const averageOsbOne = Number(document.getElementById('averageOne').textContent.replace(/[$.]/g, "").trim())
    // let priceOsbOne = document.getElementsByClassName('pricesOsb').item(1)//[0].//
    //priceOsbOne = priceOsbOne.textContent//.replace(/[$.]/g, "").trim()
    // priceOsbOne = Number(priceOsbOne)
    //textContent.replace(/[$.]/g, "").trim())
    // const variationOsbFirst = (((priceOsbOne - averageOsbOne) / averageOsbOne) * 100).toFixed(2)
  //   // const averageOsbTwo = Number(document.getElementById('averageTwo').textContent.replace(/[$.]/g, "").trim())
  //   // const priceOsbTwo = Number(Array.from(document.getElementsByClassName('pricesOsb'))[1].textContent.replace(/[$.]/g, "").trim())
  //   // const variationOsbTwo = (((priceOsbTwo - averageOsbTwo) / averageOsbTwo) * 100).toFixed(2)
  // console.log(priceOsbOne)
    // setVariationOne(variationOsbFirst)
  //   // setVariationTwo(variationOsbTwo)
  },[])

  return (
    <div className="row">
      {/* {filter.map((item) => ( */}
        <div className="mt-3 col col-ms-12 col-md">
          <div className="card text-bg-light ms-4 mt-3 mb-5 ">
            <h5 class="card-header d-flex justify-content-between">
              {storeOne}
              <span>
                {variationOsbOne > 0 ? <FaIcons.FaSortUp className="me-2 text-success" /> : <FaIcons.FaSortDown className="me-2 text-danger" />}
                {`${variationOsbOne} %`}
              </span>
            </h5>
            <div className="card-body">
              <div className="card-tittle"></div>
              <div className="card-text">{nameOne}</div>
              <div className="pricesOsb obs price card-text  mt-3 ">{priceOne}</div>
            </div>
          </div>
        </div>

        <div className="mt-3 col col-ms-12 col-md">
          <div className="card text-bg-light ms-4 mt-3 mb-5 ">
            <h5 class="card-header d-flex justify-content-between">
              {storeTwo}
              <span>
              {variationOsbTwo > 0 ? <FaIcons.FaSortUp className="me-2 text-success" /> : <FaIcons.FaSortDown className="me-2 text-danger" />}
                {`${variationOsbTwo} %`}
              </span>
            </h5>
            <div className="card-body">
              <div className="card-tittle"></div>
              <div className="card-text">{nameTwo}</div>
              <div className="pricesOsb obs price card-text  mt-3 ">{priceTwo}</div>
            </div>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};


// import React from "react";
// import { filterProduct2 } from "./ordenar";
// export const CardProducto2 = ({ products = [] }) => {
//   const date = filterProduct2(products);
//   return (
//     <div className="row">
//       {date.map((item) => (
//         <div key={item._id} className="col col-ms-12 col-md">
//           <div className="card text-bg-light ms-4 mt-3 mb-5">
//             <h5 class="card-header">{item.store}</h5>
//             <div className="card-body">
//               <div className="card-tittle"></div>
//               <div className="card-text">{item.name}</div>
//               <div className="price card-text  mt-3 ">{item.price}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };