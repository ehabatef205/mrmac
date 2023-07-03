import React from "react";
import "./Section.css";
import { NavLink } from "react-router-dom";
import { colors, options, type, size } from "./prodlist";
export default function Sider() {
  return (
    <div>
      <div className="contianer  sider1  d-flex flex-wrap ">
        <div
          className="border-bottom border-2 border-secondary w-100 col-12"
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1 d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

          {type.map((word, index) => (
            <div className="change1 d-flex my-1" key={index}>
              <i
                style={{ fontSize: "11px" }}
                className="bi bi-caret-right-fill"
              ></i>
              <a
                className="link-opacity-75 text-black mx-2"
                href="page2"
                style={{ textDecoration: "none" }}
              >
                {word}
              </a>
            </div>
          ))}
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

          <div className="change1  d-flex my-1  ">
            <i style={{ fontSize: "11px" }} class="bi bi-caret-down-fill"></i>
            <a
              className="change1 text-black mx-2"
              href="#"
              style={{ textDecoration: "none" }}
            >
              header2
            </a>
          </div>
          <div className="  d-flex mx-1 ">
            <label for="search_term"></label>
            <input
              type="text"
              id="brand_search"
              className="w-100 "
              placeholder="Search Brand"
              name=""
            />
          </div>

          <div className="d-flex">
            <ul
              className="m-0"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {options.map((word, index) => (
                <li className="my-1" key={index}>
                  <div className="change2" style={{ textDecoration: "none" }}>
                    <input type="checkbox" name="filter" />
                    <span className="mx-2">{word}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px ", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

          <div className="change1  d-flex my-1  ">
            <i style={{ fontSize: "11px" }} class="bi bi-caret-down-fill"></i>
            <a
              className="change1 text-black mx-2"
              href="#"
              style={{ textDecoration: "none" }}
            >
              header2
            </a>
          </div>
          <div className="d-flex">
            <ul
              className="m-0 w-100"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {colors.map((color, index) => (
                <li className="my-1" key={index}>
                  <div
                    className="change2 d-flex"
                    style={{
                      justifyContent: "space-between",
                      textDecoration: "none",
                    }}
                  >
                    <div
                      className="d-flex"
                      style={{ justifyContent: "space-between" }}
                    >
                      <i
                        className={`bi bi-circle-fill text-${color.value}`}
                      ></i>
                      <span className="mx-2">{color.name}</span>
                    </div>
                    <input className="mx-2" type="checkbox" name="filter" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

          <div className="change1  d-flex my-1  ">
            <i style={{ fontSize: "11px" }} class="bi bi-caret-down-fill"></i>
            <a
              className="change1 text-black mx-2"
              href="#"
              style={{ textDecoration: "none" }}
            >
              header2
            </a>
          </div>
          <div
            className="d-flex flex-wrap row-cols-4 "
            style={{ justifyContent: "space-between" }}
          >
            {size.map((number, index) => (
              <button
                key={index}
                style={{
                  zIndex: 3,
                  cursor: "pointer",
                  width: "55px",
                  height: "30px",
                  fontSize: "11px",
                  borderRadius: "0px",
                }}
                className="btn my-1 btn-outline-secondary col-4"
              >
                {number}
              </button>
            ))}
          </div>
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 col-12"
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1 d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>

          {type.map((word, index) => (
            <div className="change1 d-flex my-1" key={index}>
              <i
                style={{ fontSize: "11px" }}
                className="bi bi-caret-right-fill"
              ></i>
              <a
                className="link-opacity-75 text-black mx-2"
                href="#"
                style={{ textDecoration: "none" }}
              >
                {word}
              </a>
            </div>
          ))}
        </div>

        <div
          className="border-bottom border-2 border-secondary w-100 col-12 "
          style={{ fontSize: "14px", paddingBottom: "25px" }}
        >
          <div className="change1  d-flex my-1 mx-1">
            <p style={{ fontSize: "15px" }}>
              <b>header</b>
            </p>
          </div>
          <div className="d-flex ">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              veniam, soluta optio dolorem possimus nihil omnis t otam eum a
              odit laudantium, reprehenderit quae quisquam ad? Illum quis
              adipisci officiis labore! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Alias sit repellendus nulla voluptate laborum
              quas quisquam possimus praesentium fuga. Explicabo ad quae aliquam
              delectus molestiae voluptatum sapiente nulla Lorem ipsum dolor sit
              amet, consectetur adipis icing elit. Delectus illum quos omnis qui
              magnam aliquid, dolorum tempore, est officia, dolorem veniam
              cumque. Molestias neque aliquam inventore sapiente excepturi
              obcaecati ipsum? perspiciatis corporis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
