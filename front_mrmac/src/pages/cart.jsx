import {React, useState, useRef, useEffect} from "react";
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

  const [viewInputs,setView]=useState(false)

  const [products,setProducts]=useState([])

  const phone = useRef(null); 
  const country = useRef(null);
  const firstName = useRef(null); 
  const lastName = useRef(null);
  const address = useRef(null); 
  const city = useRef(null);
  const zipCode = useRef(null);

  useEffect(()=>{
      if(localStorage.getItem("MRMACAuthorization") !== null){
        setLoading(true)
      getCarts(localStorage.getItem("MRMACAuthorization")).then(res=>{
        setLoading(false)
        setCarts(res.data)
      }).catch((error) => {
        setLoading(false)
      })
      }
    }
    ,[])

    const addProducts = () => {
      for(var i = 0; i < carts.length; i++){
        const product = {product_id:carts[i].product_id, quantity: carts[i].quantity}
        setProducts(products => [...products, product]) 
      }
    }

    const add = async() => {
      if(viewInputs === false){
        addProducts()
        setView(true)
      }else{
        await addOrder(products, phone.current.value, country.current.value, firstName.current.value, lastName.current.value, address.current.value, city.current.value, zipCode.current.value).then(async res => {
          console.log(res.data)
        })
        window.location.reload(false)
      }
    }

    const view = () => {
      setView(true)
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
        {viewInputs && (<div>
          <input
            ref={country}
            style={inputText5}
            placeholder="الدولة"
            type="text"
          />
          <input
            ref={phone}
            style={inputText5}
            placeholder="رقم الهاتف"
            type="phone"
          />
          <input
            ref={lastName}
            style={inputText5}
            placeholder="الاسم الاخير"
            type="text"
          />
          <input
            ref={firstName}
            style={inputText5}
            placeholder="الاسم الاول"
            type="text"
          />
          <input
            ref={address}
            style={inputText5}
            placeholder="العنوان بالتفصيل"
            type="text"
          />
          <input
            ref={city}
            style={inputText5}
            placeholder="المحافظة"
            type="text"
          />
          <input
            ref={zipCode}
            style={inputText5}
            placeholder="الرقم البريدي"
            type="ىعلاث"
          />
        </div>)}
        <div className=" my-1 w-50  d-md-grid ">
                  <span className=" my-2 h-100 " style={{ textAlign: "center" }}>
                    <button
                      className="btn text-light my-3 h-50 w-100"
                      onClick={() => {add()}}
                      style={{ backgroundColor: "blue" }}
                      disabled={localStorage.getItem("MRMACAuthorization") === null}
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

const inputText5 = {
  border: "1px solid #000",
  borderRadius: "15px",
  width: "calc(50% - 20px)",
  padding: "10px",
  marginTop: "20px",
  textAlign: "right",
  margin: "10px"
}