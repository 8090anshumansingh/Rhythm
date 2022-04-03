import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../styles/cards.css";

function Cards(props) {
    return (
        <div>
            <Card className='cardStyle'  >
  <Card.Img variant="top" src={props.image}  className='cardImage'/>
  <Card.Body>
    <Card.Title className='cardTitle'>{props.title}</Card.Title>
    <Card.Text className='cardArtist'>
      {props.artist}
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
</Card>
        </div>
    );
}

export default Cards;