import {React, useState, useEffect} from "react";
import Homeslider from "../components/section/homeslider";
import { Container } from "react-bootstrap";
import Homecards from "../components/section/homecards";
import {Buttons, Categories} from "../components/section/homecards";
import "../components/section/slider.css";
import { Nav2 } from "../components/Navs/Nav2";
import getAll from '../api/basis/allcategory'
import { FaSpinner } from 'react-icons/fa';
import "../components/section/homecard.css"

export default function Home() {
  const [categories,setCategories]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
      getAll().then(res=>{
        setLoading(false)
        setCategories(res.data.response)
      })
      }
  ,[])

  return (
    <>
    <Nav2></Nav2>
    <div
      className="home"
      style={{ height: "fit-content", position: "relative", top: "61px", backgroundColor: "#e7e7e7"}}
    >
      <div
        className="d-flex"
        style={{ height: "300px", justifyContent: "center" }}
      >
        <Homeslider></Homeslider>
      </div>    

      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
            <Buttons></Buttons>
          </div>
        </div>
      </Container>

      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
            <Categories></Categories>
          </div>
        </div>
      </Container>

      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> 
  : <>{categories.map((card, indexOfCategory) => (
              <div key={card._id}>
              <div>
              <img
                className="d-block w-100 "
                src={card.imageBanner}
                alt="Third slide"
                style={{ height: "200px" }}
              />
              </div>
              <Homecards id={card._id} name={card.name} index={indexOfCategory}></Homecards>
              </div>
            ))}</>}
          </div>
        </div>
        <div>
          <img
            className="d-block w-100 "
            src="/brands.jpg"
            alt="brands"
            style={{ height: "200px" }}
          />
       </div>
      </Container>
    </div>
    </>
  );
}
