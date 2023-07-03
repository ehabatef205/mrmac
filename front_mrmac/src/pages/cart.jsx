import {React, useState, useEffect} from "react";
import { FaSpinner } from 'react-icons/fa';
import { Container } from "react-bootstrap";
import {ViewCart} from "../components/section/homecards";
import "../components/section/slider.css";
import { Nav2 } from "../components/Navs/Nav2";
import getCarts from "../api/basis/getCarts"
import addOrder from "../api/basis/addOrder"
import removeCart from "../api/basis/removeCart"

export default function CartPage() {
    const [carts,setCarts]=useState([])

  const [loading,setLoading]=useState(false)

  useEffect(()=>{
      if(localStorage.getItem("Authorization") !== null){
        setLoading(true)
      getCarts(localStorage.getItem("Authorization")).then(res=>{
        setLoading(false)
        console.log(res.data[0]._id)
        setCarts(res.data)
      }).catch((error) => {
        setLoading(false)
      })
      }
    }
    ,[])

    const add = async() => {
      for(var i = 0; i < carts.length; i++){
        await addOrder(localStorage.getItem("Authorization"), carts[i].product_id).then(async res => {
          await removeCart(carts[i]._id).then(res => {
            console.log("Done")
          })
        })
      }
      window.location.reload(false)
    }
  return (
    <>
    <Nav2></Nav2>
    <div
      className="cart_page"
      style={{ height: "fit-content", position: "relative", top: "61px", backgroundColor: "#e7e7e7"}}
    >
      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
          <Container
          className="my-4"
          style={{ justifyContent: "center", backgroundColor: "white" }}
        >
          <div className="d-flex justify-content-around flex-wrap">
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> 
   : <>{carts?.map((cart, index) => <ViewCart key={index} id={cart.product_id} cart_id={cart._id} quantity={cart.quantity} />)}</>}
          </div>
        </Container>
        <div className=" my-1 w-50  d-md-grid ">
                  <span className=" my-2 h-100 " style={{ textAlign: "center" }}>
                    <button
                      className="btn text-light my-3 h-50 w-100"
                      onClick={() => {add()}}
                      style={{ backgroundColor: "blue" }}
                      disabled={localStorage.getItem("Authorization") === null}
                    >
                      طلب اوردر
                    </button>
                  </span>
                </div>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
