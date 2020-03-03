import React from 'react';
import {Card} from 'react-bootstrap'
import s from './Card.scss';


const Cards = (props) => {

  // onclick = (item) => {
  //   // event.preventDefault()
  //   console.log(item)
  //
  // }
  return (
    <React.Fragment>
    {props.products && props.products.length > 0 && props.products.map((item, i) =>  <Card key={i}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <a href={'javascript:void(0)'} onClick={e => props.id(item, e)}>View post</a>
        </Card.Body>
      </Card>)}
      </React.Fragment>
  );
}

export default Cards;
