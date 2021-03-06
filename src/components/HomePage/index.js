import React from "react";
import { Row, Col, Container} from 'react-materialize';

import logo from '../../images/logo.png';
import background from '../../images/background.png';
import styled from 'styled-components';
import SignInContainer from '../../containers/Auth/SignInContainer';
import SignUpContainer from '../../containers/Auth/SignUpContainer';

const BackgroundBlue = styled.div`
   background-color: #75d3f4;
   height: 100%;
   margin: 0px;
   padding: 0px;
`;

const BgImg = styled.img`
  margin-top: 20%;
`;

const Logo = styled.img`
  margin-top: 20px;
`;

const HomePage = () => (
  <BackgroundBlue>
    <Container>
      <Row>
        <Col xs={12} s={8} m={4} l={4}>
          <Logo src={logo} className="responsive-img"/>
        </Col>
      </Row>
      <Row>
        <Col s={0} m={0} l={6}>
          <Row>
            <Col m={10} offset="m1" className="hide-on-med-and-down">
              <BgImg src={background} className="responsive-img" />
            </Col>
          </Row>
        </Col>
        <Col s={12} m={8} offset="m2 l2" l={4}>
          <SignInContainer/>
          <SignUpContainer/>
        </Col>
      </Row>
      </Container>
  </BackgroundBlue>
);

 export default HomePage;
