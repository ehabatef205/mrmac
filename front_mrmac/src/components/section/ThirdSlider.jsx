import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Container from "react-bootstrap/Container";

export default function ThirdSlider({ id }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const cardData = [
    {
      src: " https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Card 1 text",
    },
    {
      src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Card 2 text",
    },
    {
      src: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Card 3 text",
    },
    {
      src: " https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Card 1 text",
    },
    {
      src: "https://images.pexels.com/photos/9218538/pexels-photo-9218538.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Card 2 text",
    },
  ];
  return (
    <Container
      className="  d-flex justify-content-center "
      style={{ boxSizing: "border-box" }}
    >
      <div className=" w-100 sec  ">
        <div id={id} className="carousel slide w-100" data-bs-ride="carousel">
          <div className="carousel-inner w-100 ">
            <div className="carousel-item active w-100  ">
              <div className="mo d-flex w-100 ">
                {cardData.map((card, index) => (
                  <Card
                    className="mx-3 "
                    style={{ width: "18rem" }}
                    key={index}
                  >
                    <Card.Img variant="top" src={card.src} />
                    <Card.Body>
                      <Card.Title>Card {index + 1} Title</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <button className='btn'style={{ backgroundColor: "#7DCEA0" }}>Go somewhere</button>

                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="mo d-flex ">
                {cardData.map((card, index) => (
                  <Card
                    className="mx-3 "
                    style={{ width: "18rem" }}
                    key={index}
                  >
                    <Card.Img variant="top" src={card.src} />
                    <Card.Body>
                      <Card.Title>Card {index + 1} Title</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <button className='btn'style={{ backgroundColor: "#7DCEA0" }}>Go somewhere</button>

                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
            <div className="carousel-item">
              <div className="mo d-flex ">
                {cardData.map((card, index) => (
                  <Card
                    className="mx-3 "
                    style={{ width: "18rem" }}
                    key={index}
                  >
                    <Card.Img variant="top" src={card.src} />
                    <Card.Body>
                      <Card.Title>Card {index + 1} Title</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <button className='btn'style={{ backgroundColor: "#7DCEA0" }}>Go somewhere</button>

                    </Card.Body>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Container>
  );
}
