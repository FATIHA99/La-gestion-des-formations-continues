import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
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

    const handleForm = async (e) => {
        e.preventDefault();
       await  axios.post(`${END_POINT}/formation/add`, data)
            .then((e) => {
                // console.log(e.data.message)
                if (e.data.message === 'formation added') {
                    toast.success(e.data.message)
                    handleClose()
                } else {
                    toast.warning(e.data.message)
                }

            })
    }

    return (
        <>
            <Button variant="secondary border-0 m-3" onClick={handleShow} style={{ backgroundColor: "#323C50" }}>
                Add Formation
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title>Add Formation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <Form >
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>Label</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                type="text"
                                name='label'
                                placeholder="enter the label of formation"
                                autoFocus
                            />

                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label className='text-light'>description</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                name="description"
                                as="textarea"
                                rows={3} />
                        </Form.Group>
                        {/* <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>start date</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                type="date"
                                name='start_date'
                                placeholder="enter the label of formation"
                                autoFocus
                            />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>end date</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                type="date"
                                name='end_date'
                                placeholder="enter the label of formation"
                                autoFocus
                            />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>image</Form.Label>
                            <Form.Control
                                onChange={handleInput}
                                type="file"
                                name='image'
                                placeholder="enter the label of formation"
                                autoFocus
                            />

                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="info" onClick={handleForm}>
                        Add Formation
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default Example

