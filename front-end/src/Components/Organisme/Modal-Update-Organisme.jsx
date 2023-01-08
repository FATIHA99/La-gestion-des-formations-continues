import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import END_POINT from '../../config'



function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [oneOrganisme, setOrganisme] = useState({ label: '', compus: '' });


    const getOne = async (e, id) => {
        e.preventDefault()

        const One = await axios.get(`${END_POINT}/organisme/getone/${id}`)
        setOrganisme((One.data));
        console.log(One.data)

        handleShow()

    }


    return (

        <>


            <button onClick={(e) => { getOne(e, props.id) }} className="btn  btn-outline-info"  ><i className="bi bi-pencil-square"></i> </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title>Add organisme</Modal.Title>
                </Modal.Header>
               


                    <Modal.Body className='bg-dark'>
                        <Form >
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label className='text-light'>Label</Form.Label>
                                <Form.Control

                                    type="text"
                                    value={oneOrganisme.label}
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

                                    type="text"
                                    value={oneOrganisme.compus}
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
                    <Button variant="info" onClick={handleClose}>
                        Add Organisme
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}



export default Example

