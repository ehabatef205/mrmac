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

  return (
    <div>
      <Navbar variant="light" fixed={"top"} className="custom-navbar" style={{height: "60px", width: "100vw", backgroundColor: "rgb(225, 111, 0)"}}>
        <Container fluid className="px-0">
          <Nav.Link style={{paddingLeft: "10px"}} onClick={() => {
            if(localStorage.getItem("MRMACAuthorization") === null){
              navigate("/login");
            }else{
              navigate("/profile");
            }
          }}>
              <AccountCircleOutlinedIcon style={{color: "#fff", fontSize: "25px"}}/>
          </Nav.Link>
          <Nav.Link style={{paddingLeft: "20px"}} onClick={() => {
              if(localStorage.getItem("MRMACAuthorization") === null){
                toast.warning("Please login first", {
                  position: toast.POSITION.TOP_RIGHT
              })
              }else{
                navigate("/cart");
              }
          }}>
              <ShoppingBagOutlinedIcon style={{color: "#fff", fontSize: "25px"}}/>
          </Nav.Link>
          <Nav.Link style={{paddingLeft: "20px"}}>
              <FavoriteBorderOutlinedIcon style={{color: "#fff", fontSize: "25px"}}/>
          </Nav.Link>
          <Nav className="me-auto" style={{display: "flex", alignItems: "center", justifyContent: "center", width: "50vw"}}>
            <div style={container}>
              <Nav.Link style={{ color: "#fff"}}>
                <SearchOutlinedIcon style={{color: "#000"}}/>
              </Nav.Link>
              <input
                style={{ color: "#000", border: "none", outline: "none", textAlign: "right", background: "#fff", borderRadius: "25px", width: "100%"}}
                value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
              />
            </div>
            {/* <Nav.Link href={"#cart"} style={{marginLeft:'3%'}} onClick={() => setShow(false)}><ShoppingBagOutlinedIcon /></Nav.Link>  */}
          </Nav>
          <Nav className="me-auto" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div style={{fontSize: "calc(2vmin)", fontWeight: "bold", marginLeft: "5px", marginRight: "5px", color: "#fff"}}>
              +96560610918
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
  backgroundColor: "#fff",
  paddingRight: "1%",
  borderRadius: 50,
  width: "30vw",
};

const imageNav = {
  display: "flex",
  justifyContent: "flex-end",
};
