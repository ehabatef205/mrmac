import React from "react";
import { Card } from "react-bootstrap";
import { useState ,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import getFaction from "../../api/basis/productsbycategory";
import { FaSpinner } from 'react-icons/fa';
import addCart from "../../api/basis/addCart"
import removeCart from "../../api/basis/removeCart"
import getProduct from '../../api/basis/product'
import "./homecard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getAll from '../../api/basis/allcategory'

export default function Homecards(props) {

  const [prod_by_cat,setProdByCat]=useState([])
  const [loading,setLoading]=useState(false)
  
  useEffect(()=>{
  if (props.id){
    setLoading(true)
    getFaction(props.id).then(res=>{
      setLoading(false)
      setProdByCat(res.data)
    }).catch((error) => {
      setLoading(false)
    })
  }
  }
  ,[])

  const navigate = useNavigate();

  const icons = [
    "bi bi-phone",
    "bi bi-headphones",
    "bi bi-laptop",
    "bi bi-earbuds",
  ];

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
    <Container
          className="my-4"
          style={{ justifyContent: "center", backgroundColor: "white" }}
        >
          <div className="" style={{ height: "70px", textAlign: "right", flexDirection: "row", display: "flex", justifyContent: "flex-end"}}>
            <div
              className=" col-9"
              style={{ display: "flex", display: "inline-flex", justifyContent: "flex-end", alignItems: "end"}}
              >
              <p style={{cursor: "pointer", fontSize: "15px"}} onClick={() => {navigate("/view_products/category/"+props.id, {state: {id: props.id, name: props.name, icon: icons[props.index], indexOfphoto: props.index}})}}
            >عرض الكل </p>
            </div>
            <div
              style={{ display: "inline-flex", alignItems: "center"}}>
              <b style={{ paddingLeft: "13px", paddingRight: "13px", fontSize: "25px"}}>{props.name}</b>
              <i className={icons[props.index]} style={{fontSize: "35px"}}></i>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap">
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> 
   : <>
            {prod_by_cat?.map((product, index) => (index < 8)? <div
                className="card m-2"
          style={{border: '0.5px solid #C8D2D1', width: "288px", height: "320px"}}
                key={product?._id}
              >
                <img
                  className="card-img-top"
                  style={{ height: "230px" }}
                  src={product.image}
                  alt="Card image cap"
                  onClick={() => {navigate(`/category/${props.id}/view_product/${product?._id}`, {state: product});}}
                />
                <div
                  className="card-body my-2 d-flex   justify-content-between"
                  style={{ fontSize: "15px", padding: "5px" }}
                >
                  <div>
                    <button
                      className="btn text-light my-3 mx-3  "
                      style={{ backgroundColor: "rgb(225, 111, 0)" }}
                      onClick={() => {add(product._id)}}
                      disabled={localStorage.getItem("Authorization") === null}
                      >
                      <i className="bi bi-plus-lg" color="#fff"></i>
                    </button>
                  </div>
                  <div className="d-flex flex-column align-items-end " onClick={() => {navigate(`/category/${props.id}/view_product/${product?._id}`, {state: product});}}>
                    <Card.Title className="mb-0" style={{whiteSpace: "nowrap",
    overflow: "hidden",
    overflowWrap: "break-word",
    textOverflow: "ellipsis",
    width: "190px", textAlign: "end"}}>{product.name}</Card.Title>
                    <Card.Text className="mb-0">KWD السعر: {product.price}</Card.Text>
                    <Card.Text>الكمية: {product.quantity}</Card.Text>
                  </div>
                </div>
              </div> : <div key={product?._id}></div>)}
              </>}
          </div>
          <ToastContainer />
    </Container>
  );
}

export function ViewProductCard() {
  const location = useLocation();
  const data = location.state;

  const [prod_by_cat,setProdByCat]=useState([])

  const [loading,setLoading]=useState(false)
  
  useEffect(()=>{
    setLoading(true)
    getFaction(data.id).then(res=>{
      setLoading(false)
      setProdByCat(res.data)
    })
  }
  , [data])

  const images = [
    "/banar2.jpg",
    "/banar1.jpg",
    "/banar3.jpg",
    "/banar1.jpg",
  ]

  const navigate = useNavigate();

  return (
    <div>
      <div>
      <img
        className="d-block w-100 "
        src={images[data.indexOfphoto]}
        alt="Third slide"
        style={{ height: "200px" }}
      />
      </div>
      <Container
          className="my-4"
          style={{ justifyContent: "center", backgroundColor: "white" }}
        >
          <div className="" style={{ height: "70px", textAlign: "right", flexDirection: "row", display: "flex", justifyContent: "flex-end"}}>
            <div
              style={{ display: "inline-flex", alignItems: "center"}}>
              <p style={{ paddingLeft: "13px", paddingRight: "13px"}}>{data.name}</p>
              <i className={data.icon}></i>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap">
            {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> 
   : <>
            {prod_by_cat?.map((product, index) => <div
                className="card m-2"
          style={{border: '0.5px solid #C8D2D1', width: "288px", height: "320px"}}
                key={product?._id}
              >
                <img
                  className="card-img-top"
                  style={{ height: "230px" }}
                  src={product.image}
                  alt="Card image cap"
                  onClick={() => {navigate(`/category/${data.id}/view_product/${product?._id}`, {state: product});}}
                />
                <div
                  className="card-body my-2 d-flex   justify-content-between"
                  style={{ fontSize: "15px", padding: "5px" }}
                >
                  <div>
                    <button
                      className="btn text-light my-3 mx-3  "
                      style={{ backgroundColor: "rgb(225, 111, 0)" }}
                      onClick={() => {}}
                      disabled={localStorage.getItem("Authorization") === null}
                      >
                      <i className="bi bi-plus-lg" color="#fff"></i>
                    </button>
                  </div>
                  <div className="d-flex flex-column align-items-end " onClick={() => {navigate(`/category/${data.id}/view_product/${product?._id}`, {state: product});}}>
                    <Card.Title className="mb-0" style={{whiteSpace: "nowrap",
    overflow: "hidden",
    overflowWrap: "break-word",
    textOverflow: "ellipsis",
    width: "190px", textAlign: "end"}}>{product.name}</Card.Title>
                    <Card.Text className="mb-0">KWD السعر: {product.price}</Card.Text>
                    <Card.Text>الكمية: {product.quantity}</Card.Text>
                  </div>
                </div>
              </div>)}
              </>}
          </div>
        </Container>
    </div>
  );
}

export function ViewCart(props) {
  const [product,setProduct]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    if (props.id){
      setLoading(true)
      getProduct(props.id).then(res=>{
        setLoading(false)
        console.log(res.data)
        setProduct(res.data)
      }).catch((error) => {
        setLoading(false)
      })
    }
    }
    ,[props])

    const remove = (cart_id) => {
      removeCart(cart_id).then(res => {
        window.location.reload(false)
      })
    }

  return (
    <>{loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> : <div className="card m-2"
          style={{border: '0.5px solid #C8D2D1', width: "288px", height: "320px"}}
              >
                <img
                  className="card-img-top"
                  style={{ height: "230px" }}
                  src={product.image}
                  alt="Card image cap"
                />
                 <div
                  className="card-body my-2 d-flex   justify-content-between"
                  style={{ fontSize: "15px", padding: "5px" }}
                >
                  <div>
                    <button
                      className="btn text-light my-3 mx-3  "
                      style={{ backgroundColor: "red" }}
                      onClick={() => {remove(props.cart_id)}}
                      disabled={localStorage.getItem("Authorization") === null}
                      >
                      <i className="bi bi-trash3" color="#fff"></i>
                    </button>
                  </div>
                  <div className="d-flex flex-column align-items-end " onClick={() => {}}>
                    <Card.Title className="mb-0" style={{whiteSpace: "nowrap",
    overflow: "hidden",
    overflowWrap: "break-word",
    textOverflow: "ellipsis",
    width: "190px", textAlign: "end"}}>{product.name}</Card.Title>
                    <Card.Text className="mb-0">KWD السعر: {product.price}</Card.Text>
                    <Card.Text>الكمية: {props.quantity}</Card.Text>
                  </div>
                </div>
              </div>}
              </>
  );
}

export function Buttons() {

  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
  ]

  return (
    <Container
          className="my-4"
          style={{ justifyContent: "center"}}
        >
          <div className="d-flex justify-content-around flex-wrap">
            {photos.map((image, index) => <div
                className="card m-2"
          style={{ width: "288px", background: "none", border: "none"}}
                key={index}
              >
                <img
                    className="card-img-top"
                    src={image}
                    alt="Card image cap"
                  />
              </div>)}
          </div>
          <ToastContainer />
    </Container>
  );
}


export function Categories() {

  const navigate = useNavigate();

  const [categories,setCategories]=useState([])
  useEffect(()=>{
    getAll().then(res=>{
      setCategories(res.data.response)
      console.log(res.data.response)
    })
    }
,[])

  const photos = [
    "phone.png",
    "speakers.png", 
    "caraccessories.png",
    "headphone.png",
  ]

  const icons = [
    "bi bi-phone",
    "bi bi-headphones",
    "bi bi-laptop",
    "bi bi-earbuds",
  ];

  return (
    <Container
          className="my-4"
          style={{ justifyContent: "center"}}
        >
          <div className="d-flex justify-content-around flex-wrap">
            {categories.map((category, index) => <div
                className="card m-2"
          style={{ width: "150px", justifyContent: "center", alignItems: "center", border: "none", backgroundColor: "transparent", cursor: "pointer"}}
                key={index}
                onClick={() => {navigate("/view_products/category/"+category._id, {state: {id: category._id, name: category.name, icon: icons[icons.index], indexOfphoto: index}})}}
              >
                <img
                    className="card-img-top"
                    src={photos[index]}
                    alt="Card image cap"
                  />
                  <b>{category.name}</b>
              </div>)}
          </div>
          <ToastContainer />
    </Container>
  );
}
