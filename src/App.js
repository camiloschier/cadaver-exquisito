import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col,Row} from 'react-bootstrap'
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />

      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    </Router>


    // <Container className="contenedor">
    //   <Row className="fila">
    //     <Col sm={12} md={12} lg={12}>
    //       <Titulo/>
    //       <Card >
    //         <Card.Body>
              
    //             <Formulario/>
    //             {/* <Captcha/> */}
                
    //         </Card.Body>
    //         {/* <Logo/> */}
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
    
  );
}

export default App;
