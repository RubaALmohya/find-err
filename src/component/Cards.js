import React, { useState } from "react";
import CardData from "./CardData";
import {Card , Col , Row ,Button} from 'react-bootstrap';
import '../App.js';
import '../Style.scss'

function Cards() {
  const [memeImage, setMemeImahe] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
    <div>
    <Card className="bg-dark text-white">
    <Card.Img  src={memeImage} alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>صورة من الذاكرة</Card.Title>
      <Card.Text>المملكة العربية السعودية</Card.Text>
      <Button onClick={myRandomEmg} variant="dark">التالي</Button> 
      
      
    </Card.ImgOverlay>
  </Card>

     
    </div>
  );
}

export default Cards;
