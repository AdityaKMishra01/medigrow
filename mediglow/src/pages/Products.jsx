import React, { useState } from "react";
import "../../public/style.css";
import data from "../data.json";
import { NavLink } from "react-router-dom";
import Footer from '../components/Footer';


const Products = () => {
  const [curtpage, setCurtPage] = useState(1);
  const [searchPro,setSearchPro] = useState()
  const numOfProd = 10;
  
  let filterPro = searchPro ? data.filter((item)=>item.name.toLowerCase().includes(searchPro)) : data;


  let numOfPage = Math.ceil(filterPro.length/numOfProd)

  let showProduct = filterPro.slice(
    (curtpage -1)*numOfProd,curtpage * numOfProd
  )

  const left = ()=>{
    setCurtPage(curtpage-1)

    if(curtpage === 1){
      setCurtPage(1)
    }
  }

  const right = ()=>{
    setCurtPage(curtpage+1)
    if(curtpage === numOfPage){
      setCurtPage(numOfPage)
    }
  }

  const last = ()=>{
    setCurtPage(numOfPage)
  }

  return (
    <>
      <div className="proList">
        <div className="searchPro">
          <input className="search" type="text" value={searchPro} onChange={(e)=>setSearchPro(e.target.value.toLowerCase())} placeholder="Search Plant" />
          <div className="searchcontent">
          </div>
        </div>
        <div className="products">
          {showProduct.map((item) => (
            <NavLink to={`/prodtl/${item.id}`}>
              <div className="slgprd" key={item.id}>
                <div className="proImg">
                  <img src={item.image} alt="image" className="Listimg" />
                </div>
                <div className="proDtl">
                  <h1>{item.name}</h1>
                  <p>{item.botanical_name}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="navigationBtn">
          <button onClick={left} className="navBtn"><i className="fa-solid fa-chevron-left"></i></button>
          <p>{curtpage}/{numOfPage}</p>
          <button onClick={right} className="navBtn"><i className="fa-solid fa-chevron-right"></i></button>
          <button onClick={last} className="lastBtn">last</button>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Products;
