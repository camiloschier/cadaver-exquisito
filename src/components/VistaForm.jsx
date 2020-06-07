import React, {useState} from 'react';
import { Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Formulario from './components/Formulario/Formulario'
import Titulo from './components/Titulo/Titulo'
const VistaForm = () =>{
    
    

    
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
    )
}

export default VistaForm;