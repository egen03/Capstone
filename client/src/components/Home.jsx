import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export class Home extends React.Component {
    render() {
        return (
            <Jumbotron>
  <h1>Jewelry has the power to be the one little thing that makes you unique!</h1>
  <p>
    Welcome to Hearts of Gold. Browse for gifts for you your family and your friends.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    );
    }
}

export default Home;