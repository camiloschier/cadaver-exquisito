import React from 'react';
import styles from './Titulo.module.css'
import { Row, Col } from 'react-bootstrap';

const Titulo = () =>{
    return (
        <Row>
                <h1 className={styles.titulo}>Cadaver Exquisito Córdoba</h1>
        </Row>
    )
}

export default Titulo;