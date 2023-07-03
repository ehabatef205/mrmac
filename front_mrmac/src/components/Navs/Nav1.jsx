import React, { useState ,useEffect} from "react";
import searchProduct from "../../api/basis/searchproduct";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToApp from "@mui/icons-material/ExitToApp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useNavigate } from "react-router-dom";
import { height, style } from "@mui/system";
import { Nav2 } from "./Nav2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function NavBar({ setCurrentPage, setShow }) {
  const navigate = useNavigate();
  const [selectedLink, setSelectedLink] = useState("#category1");

  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  useEffect(()=>{
    if (query==="")
    setItems([])
    else{
      searchProduct(query).then(res=>{
        setItems(res.data.response)
      })
    }

  },[query])

  const handleLinkClick = (href) => {
    setSelectedLink(href);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentPage(href);
  };

  const linkStyle = {
    padding: "0.5rem 2.1rem",
    borderRight: "1px solid Black",
  };

  return (
    <div>
      <Navbar variant="light" fixed={"top"} className="custom-navbar" style={{height: "60px", width: "100vw", backgroundColor: "#fff"}}>
        <Container fluid className="px-0">
          <Nav.Link style={{paddingLeft: "10px"}} onClick={() => {
            if(localStorage.getItem("Authorization") === null){
              navigate("/login");
            }else{
              navigate("/profile");
            }
          }}>
              <AccountCircleOutlinedIcon style={{color: "#000"}}/>
          </Nav.Link>
          <Nav.Link style={{paddingLeft: "20px"}} onClick={() => {
              if(localStorage.getItem("Authorization") === null){
                toast.warning("Please login first", {
                  position: toast.POSITION.TOP_RIGHT
              })
              }else{
                navigate("/cart");
              }
          }}>
              <ShoppingBagOutlinedIcon style={{color: "#000"}}/>
          </Nav.Link>
          <Nav className="me-auto" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "80vw"}}>
            <div style={container}>
              <Nav.Link style={{ color: "black"}}>
                <SearchOutlinedIcon style={{color: "#fff"}}/>
              </Nav.Link>
              <input
                style={{ color: "#fff", border: "none", outline: "none", textAlign: "right", background: "#000", borderRadius: "25px", width: "100%"}}
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
              />
            </div>
            {/* <Nav.Link href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></Nav.Link>  */}
          </Nav>
          <Navbar.Brand>
            {<div style={imageNav}>
              <img src="/logo.png" alt="logo" onClick={() => {
              navigate("/", {replace: true});
            }} height={"50px"} width={"60px"} style={{marginRight: "25px"}}/>
              </div>}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "absolute"}}>
      <div className="list-group" style={{ width: "40vw", marginTop: "60px",marginRight:"20%", zIndex: 9999,direction:"rtl",  position: "fixed"}}>
        {items?.map((item) => {
          return (
            <a
              className="list-group-item list-group-item-action"
              key={item._id}
              href={"/selectedproductpage/" + item._id}
            >
              {item.name}
            </a>
          )
        })}
      </div>
    </div>
    <ToastContainer />
    </div>
  );
}
const container = {
  display: "flex",
  backgroundColor: "black",
  paddingRight: "1%",
  borderRadius: 50,
  width: "40vw",
};

const imageNav = {
  width: "25vw",
  display: "flex",
  justifyContent: "flex-end",
};
