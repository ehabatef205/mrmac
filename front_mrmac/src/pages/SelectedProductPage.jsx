import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";
import ThirdSlider from "../components/section/ThirdSlider";

function SelectedProductPage({ products, handleClick }) {
  const location = useLocation();
  const data = location.state;

  const [childHeight, setChildHeight] = useState(0);

  useEffect(() => {
    const child1 = document.getElementById("child1");
    const child1Height = child1.offsetHeight;
    setChildHeight(child1Height);
  }, []);

  const [value, setValue] = useState(0);

  return (
    <div
      className="viewcontainer justify-content-center "
      style={{ position: "relative", top: "70px", height: "calc(100vh - 70px)" }}
    >
      <Container id="parent" className=" justify-content-center d-flex">
        <Row className=" " style={{ height: childHeight }}>
          <Col
            id="child1"
            className="d-flex flex-wrap col-lg-6 "
            style={{ width: "300px", padding: "0px" }}
          >
            <img
                style={{ height: "433px" }}
                className="d-block mx-1 my-1 "
                src={data.image}
                alt={data.name}
              />
          </Col>
          <Col
            id="child2"
            className=" d-flex flex-wrap col-lg-6"
            style={{
              width: "600px",
              overflow: "auto",
              boxSizing: "content-box",
              height: childHeight,
            }}
          >
            <div className=" d-flex flex-wrap  ">
              <Row
                className=" d-flex flex-wrap  w-100 mx-1 "
                style={{ width: "625px" }}
              >
                <div className=" my-1 w-100">
                  <p style={{ textAlign: "right", fontSize: "25px"}}>
                    {data.name}
                  </p>
                </div>
                {/* <div className=" w-100" >   </div> */}

                <div
                  className=" w-100 my-1 d-flex "
                  style={{ fontSize: "18px", justifyContent: "flex-end"}}
                >
                  {" "}
                  <b className="mx-2 ">{data.price}</b>
                </div>
                <div
                  className=" w-100 my-1 d-flex "
                  style={{ fontSize: "18px"}}
                >
                  {" "}
                  <div className=" my-1 w-100" style={{justifyContent: "flex-end", display: "flex",}}>
                  <p style={{ textAlign: "left", fontSize: "25px" }}>
                    {data.desc}
                  </p>
                </div>
                </div>
              </Row>
              <Row
                className=" d-flex flex-wrap w-100 w-100 mx-1 "
                style={{ height: "75px" }}
              >
                <div className=" my-1 w-50  d-md-grid ">
                  <span className=" my-2 h-100 " style={{ textAlign: "center" }}>
                    <button
                      className="btn text-light my-3 h-50 w-100"
                      onClick={() => handleClick(products)}
                      style={{ backgroundColor: "blue" }}
                      disabled={localStorage.getItem("Authorization") === null}
                    >
                      Add To Cart
                    </button>
                  </span>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SelectedProductPage;
