import React from "react";
import "./Section.css";
export default function SecHeader() {
  return (
    <div>
      <header
        className=" second  "
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="  w-50">
          <div style={{ display: "flex" }}>
            <a
              className="btn  mx-2 d-flex"
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Premium
            </a>

            <a
              className="btn  mx-2"
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Sports
            </a>
            <a
              className="btn  mx-2"
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Streetwear
            </a>
            <a
              className="btn  mx-2"
              style={{
                backgroundColor: "#f7f7f7",
                borderRadius: "26px",
                border: "1.5px solid #f7f7f7",
              }}
              href="#"
              role="button"
            >
              Fashion
            </a>
          </div>
          <div
            className="bg- m-0"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <i>53983 styles </i>
          </div>
        </div>
        <div className="d-flex" style={{ width: "150px", height: "40px" }}>
          <select class="form-select" aria-label="Dropdown">
            <option selected>Suggested</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option3">Option 4</option>
            <option value="option3">Option 5</option>
          </select>
        </div>
      </header>
    </div>
  );
}
