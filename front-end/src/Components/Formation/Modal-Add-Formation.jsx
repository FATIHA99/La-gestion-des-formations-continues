import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary border-0 m-3" onClick={handleShow} style ={{backgroundColor : "#323C50"}}>
                Add Formation
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title>Add Formation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <Form >
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className ='text-light'>Label</Form.Label>
                            <Form.Control
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
                            <Form.Label className ='text-light'>Compus</Form.Label>
                           <Form.Control  name ="description"as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className ='text-light'>start date</Form.Label>
                            <Form.Control
                                type="date"
                                name='start-date'
                                placeholder="enter the label of organisme"
                                autoFocus
                            />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className ='text-light'>end date</Form.Label>
                            <Form.Control
                                type="date"
                                name='end-date'
                                placeholder="enter the label of organisme"
                                autoFocus
                            />

                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className ='text-light'>Label</Form.Label>
                            <Form.Control
                                type="file"
                                name='image'
                                placeholder="enter the label of organisme"
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
        </>
    );
}



export default Example

