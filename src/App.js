import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap'

import Formulario from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
import Captcha from './components/Captcha'
import Logo from './components/Logo'

function App() {
  return (
    <Container className="contenedor">
      <Row className="fila">
        <Col sm={12} md={12} lg={12}>
          <Titulo/>
          <Card >
            <Card.Body>
              
                <Formulario/>
                {/* <Captcha/> */}
                
            </Card.Body>
            {/* <Logo/> */}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
