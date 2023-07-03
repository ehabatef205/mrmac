import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import getImages from '../../api/basis/getImages'
import { FaSpinner } from 'react-icons/fa';
import "./homecard.css"

export default function Homeslider() {

  const title = "image";
  const [images,setImages]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
      getImages().then(res=>{
        setLoading(false)
        setImages(res.data.response)
      })
      }
  ,[title])

  return (
    <div
      id="carouselExample"
      className="carousel slide "
      style={{ width: "100%", height: "300px" }}
    >
      {loading? <FaSpinner icon="spinner" className="icon_pulse" style={{fontSize: "50px"}}/> : <div
        className="carousel-inner"
        style={{ height: "300px", backgroundColor: "transparent" }}
      >
        <Carousel controls={false}>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
            className="d-block w-100 "
            src={image.image}
            alt="Third slide"
            style={{ height: "300px" }}
          />
                </Carousel.Item>
              ))}
            </Carousel>
      </div>}
    </div>
  );
}
