import React from "react";
import {
  Card, CardImg, CardText, CardBody, CardTitle
} from 'reactstrap';

export default function CharacterCard(props) {
  const {name, image, species, gender} = props;

  return (
    <div className='card-container'>
      <Card body outline color='secondary'>
        <CardBody>
          <CardTitle>{name}</CardTitle>
        </CardBody>
        <CardImg width="75%" src={image} alt="Card image cap" />
        <CardBody>
          <CardText>{species}</CardText>
          <CardText>{gender}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
