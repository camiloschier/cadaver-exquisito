import React, {useState} from 'react';
import styles from './Formulario.module.css'
import { Row, Col,Button, Form } from 'react-bootstrap';
import { firestore } from '../../services/firebase'
const Formulario = () =>{
    
    
    const [usuario, setUsuario] = useState();
    const [escrito, setEscrito] = useState(); 
     const handleSubmit = async(event) =>{
        alert('A name was submitted: ' + usuario);
        event.preventDefault();
        
        firestore.settings({
            timestampsInSnapshots: true
        });
        const userRef = firestore.collection('escritos').add({
            usuario: usuario,
            escrito: escrito
        });  
    //     try {
    //         await db.ref("chats").push({
    //           content: this.state.content,
    //           timestamp: Date.now(),
    //           uid: this.state.user.uid
    //         });
    //         this.setState({ content: '' });
    //       } catch (error) {
    //         this.setState({ writeError: error.message });
    //       }
    //   }
     }
    
    return (
        // <Row className={styles.formulario}>
        <>
            <form onSubmit={handleSubmit} >
                    <div className={styles.usuario}>
                        <label className={styles.usuarioNombre}>
                            Usuario:
                        </label>
                            <input type="text" value={usuario} onChange={event => setUsuario(event.target.value)} className={styles.formulario_usuario} required/>
                    </div>
                    <div>
                        <label>
                            Escrito
                        </label>
                        <textarea maxlength="50" value={escrito} onChange={event => setEscrito(event.target.value)} className={styles.formulario_escrito} required/>
                    </div>
                <Button type="submit" variant="secondary" className={styles.botonEnviar}>Enviar</Button>
            </form>
            </>
    )
}

export default Formulario;