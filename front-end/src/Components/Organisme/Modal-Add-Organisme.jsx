import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import END_POINT from '../../config'


function Example() {
    const [show, setShow] = useState(false);
    const [data, setData] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleForm = (e) => {
        e.preventDefault();
        axios.post(`${END_POINT}/organisme/add`, data)
            .then((e) => {
                toast.success('organisme added')
                handleClose()
            })
    }
    
    return (
        
        <>
            
            <Button variant="secondary border-0 m-3" onClick={handleShow} style={{ backgroundColor: "#323C50" }}>
                Add organisme
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title>Add organisme</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <Form onSubmit={handleForm}>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>Label</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                type="text"
                                name='label'
                                placeholder="enter the label of organisme"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label className='text-light'>Compus</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                type="text"
                                name="compus"
                                placeholder="enter the compus of organisme"
                                autoFocus

                            />
                           
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleForm}>
                        Add Organisme
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}



export default Example

