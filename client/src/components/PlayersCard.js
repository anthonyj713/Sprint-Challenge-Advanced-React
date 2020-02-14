import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

  const PlayersCard = (props) => {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{props.data.name}</CardTitle>
            <CardSubtitle>Country: {props.data.country}</CardSubtitle>
            <CardText>Followers: {props.data.searches}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  export default PlayersCard;
