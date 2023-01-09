import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import END_POINT from '../../config'
import { format } from 'date-fns'



function Example(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [oneFormation, setFormation] = useState({ label: '', description: '', start_date: '', end_date: '' });


    const getOne = async (e, id) => {
        e.preventDefault()
        const One = await axios.get(`${END_POINT}/formation/getone/${id}`)
        setFormation((One.data));
        handleShow()
    }

    const updateFormation = (e, id) => {
        axios.put(`${END_POINT}/formation/update/${id}`, oneFormation)
            .then((e) => {
                toast.success('formation updated ')
                handleClose();
            })
    }

    return (

        <>
            <button onClick={(e) => { getOne(e, props.id) }} className="btn  btn-outline-info"  ><i className="bi bi-pencil-square"></i> </button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='bg-dark text-light' closeButton>
                    <Modal.Title>Add formation</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark'>
                    <Form >
                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>Label</Form.Label>
                            <Form.Control
                                onChange={(e) => { setFormation({ ...oneFormation, [e.target.name]: e.target.value }) }}
                                type="text"
                                value={oneFormation.label}
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
                                onChange={(e) => { setFormation({ ...oneFormation, [e.target.name]: e.target.value }) }}
                                type="text"
                                value={oneFormation.description}
                                name="description"
                                placeholder="enter the description of formation"
                                autoFocus
                            />

                        </Form.Group>
                        {/* <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>start date</Form.Label>
                            <Form.Control
                                type="date"
                                value={oneFormation.start_date}
                                name='start-date'
                                autoFocus
                            />

                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>end date</Form.Label>
                            <Form.Control
                                type="date"
                                // value={format(oneFormation.end_date, 'yyyy/mm/dd')}
                                name='end-date'
                                autoFocus
                            />

                        </Form.Group> */}


                        {/* <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                            <Form.Label className='text-light'>image</Form.Label>
                            <Form.Control
                                type="file"
                                name='image'
                                placeholder="enter the label of organisme"
                                autoFocus
                            />

                        </Form.Group> */}
                    </Form>
                </Modal.Body>
                <Modal.Footer className='bg-dark'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/*  */}
                    <Button variant="info" onClick={(e) => { updateFormation(e, props.id) }}  >
                        update
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer />
        </>
    );
}



export default Example

