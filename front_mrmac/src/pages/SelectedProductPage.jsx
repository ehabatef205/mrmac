import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
import ThirdSlider from "../components/section/ThirdSlider";
import "./SelectedProductPage.css"
import addCart from "../api/basis/addCart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getProduct from "../api/basis/product";

function SelectedProductPage({ products, handleClick }) {
  const location = useLocation();
  const data = location.state;

  const [quantity,setQuantity]=useState(1)

  const addQuantity = () => {
    if(quantity < data.quantity){
      setQuantity(quantity + 1)
    }
  }

  const minusQuantity = () => {
    if(quantity !== 1){
      setQuantity(quantity - 1)
    }
  }

  const add = (product_id) => {
    if(localStorage.getItem("MRMACAuthorization") === null){
      toast.warning("Please login first", {
        position: toast.POSITION.TOP_RIGHT
    })
    }else if(data.quantity === 0){
      toast.warning("Wait for add new", {
        position: toast.POSITION.TOP_RIGHT
      })
    }else{
      getProduct(product_id).then(res => {
        if(res.data.quantity === 0){
          toast.warning("All quantities have been purchased", {
            position: toast.POSITION.TOP_RIGHT
          })
        }else{
          addCart(product_id, quantity).then(res => {
            if(res.data.message === "This product is already in cart"){
              toast.error(res.data.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            }else{
              console.log(res.data)
            }
          })
        }
      })
    }
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
            <b className="mx-2" style={{color: "rgb(225, 111, 0)"}}>KWD {data.price}</b>
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
            <span className=" my-2 h-75" style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
              <div style={{backgroundColor: "rgb(225, 111, 0)", borderRadius: "5px"}}><i className="bi bi-dash" style={{fontSize: "20px", padding: "10px", color: "#fff"}} onClick={() => {minusQuantity()}}></i></div>
            <b style={{padding: "10px"}}>{data.quantity === 0? "0" : quantity}</b>
            <div style={{backgroundColor: "rgb(225, 111, 0)", borderRadius: "5px"}}><i className="bi bi-plus" style={{fontSize: "20px", padding: "10px", color: "#fff"}}  onClick={() => {addQuantity()}}></i>
            </div>
            <button
                className="btn text-light my-3 h-50 w-75"
                style={{ backgroundColor: "rgb(225, 111, 0)", marginLeft: "10px" }}
                onClick={() => {add(data._id)}}
              >
                Add To Cart
              </button>
            </span>
          </div>
        </div>
      </Container>
      <ToastContainer />
      <Container>
          {data.images.map((image, index) => (
            <img key = {index}
            className="d-block w-100 "
            src={image}
            alt="Third slide"
            style={{ paddingTop: "10px"}}
          />
        ))}
        </Container>
    </div>
  );
}

export default SelectedProductPage;
