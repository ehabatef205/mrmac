import React from "react";
import { Container } from "react-bootstrap";
import {ViewProductCard} from "../components/section/homecards";
import "../components/section/slider.css";
import { Nav2 } from "../components/Navs/Nav2";

export default function ViewProduct() {
  return (
    <>
    <Nav2></Nav2>
    <div
      className="view_product"
      style={{ height: "fit-content", position: "relative", top: "61px", backgroundColor: "#e7e7e7"}}
    >

      <Container className="my-4  " style={{ justifyContent: "center" }}>
        <div>
          <div className="" style={{ height: "fit-content" }}>
            <ViewProductCard title="Category"></ViewProductCard>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
