import {React, useState, useEffect} from "react";
import "./Nave.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import getAll from '../../api/basis/allcategory'
import { useNavigate, useLocation } from "react-router-dom";

export function Nav2() {
  const navigate = useNavigate();

  const [categories,setCategories]=useState([])
  useEffect(()=>{
    getAll().then(res=>{
      setCategories(res.data.response)
    })
    }
,[])

const icons = [
  "bi bi-phone",
  "bi bi-headphones",
  "bi bi-laptop",
  "bi bi-earbuds",
];

  return (
      <Container className="d-flex justify-content-evenly nav2 w-100">
        <Nav className="me-auto text-dark w-100 justify-content-end">
          {categories.map((card, indexOfCategory) => (
            <Nav.Link className="text-dark " key={indexOfCategory} onClick={() => {{navigate("/view_products/category/"+card?._id, {state: {id: card?._id, name: card?.name, icon: icons[indexOfCategory], indexOfphoto: indexOfCategory}})}}}>
              <b>{card?.name}</b>
            </Nav.Link>
          ))}
         
        </Nav>
      </Container>
  );
}
