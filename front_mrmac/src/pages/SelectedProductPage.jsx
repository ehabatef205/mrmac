import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
import ThirdSlider from "../components/section/ThirdSlider";
import "./SelectedProductPage.css"
import addCart from "../api/basis/addCart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SelectedProductPage({ products, handleClick }) {
  const location = useLocation();
  const data = location.state;

  const add = (product_id) => {
    addCart(localStorage.getItem("Authorization"), product_id).then(res => {
      if(res.data.message === "This product is already in cart"){
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT
      })
      }else{
        console.log(res.data)
      }
    })
  }

  return (
    <div
      className="viewcontainer justify-content-center "
      style={{ position: "relative", top: "70px",}}
    >
      <Container id="parent" className="full justify-content-center d-flex">
        <div className="imageDiv" style={{justifyContent: "center", alignItems: "center", display: "flex"}}>
          <img
            className="d-block mx-1 my-1 imageProduct"
            src={data.image}
            alt={data.name}
          />
        </div>
        <div className=" d-flex flex-wrap  textDiv">
          <div className=" my-1 w-100" style={{display: "flex",
    justifyContent: "end",
    textAlign: "end"}}>
            <b style={{ textAlign: "end", fontSize: "25px"}}>
              {data.name}
            </b>
          </div>
          <div
            className=" w-100 d-flex "
            style={{ fontSize: "25px", justifyContent: "flex-end"}}
          >
            <b className="mx-2" style={{color: "rgb(225, 111, 0"}}>KWD {data.price}</b>
          </div>
          <div
            className=" w-100 my-1 d-flex "
            style={{ fontSize: "18px"}}
          >
            {" "}
            <div className=" my-1 w-100" style={{justifyContent: "flex-end", display: "flex",}}>
              <p style={{ textAlign: "right", fontSize: "18px" }}>
                {data.desc}
              </p>
            </div>
          </div>
          <div className=" my-1 w-100  d-md-grid ">
            <span className=" my-2 h-75" style={{ textAlign: "center", display: "flex", justifyContent: "center"}}>
              <button
                className="btn text-light my-3 h-50 w-75"
                style={{ backgroundColor: "rgb(225, 111, 0)" }}
                onClick={() => {add(data._id)}}
                disabled={localStorage.getItem("Authorization") === null}
              >
                Add To Cart
              </button>
            </span>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default SelectedProductPage;
