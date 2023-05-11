import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./services.css";

function ModalTest(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="button-81">
        Book Appointment
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="flex flex-wrap justify-center grid grid-cols-2 grid-flow-row">
              <Form.Group
                className="mb-3 m-2"
                controlId="exampleForm.ControlSubject1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="m-2 mb-3"
                controlId="exampleForm.ControlSubject1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>

            <Form.Group
              className="m-2 mb-3"
              controlId="exampleForm.ControlSubject1"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="subject" />
            </Form.Group>
            <Form.Group className="m-2 mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <div className="flex flex-wrap justify-center grid grid-cols-2 grid-flow-row">
              <Form.Group
                className="m-2 mb-3"
                controlId="exampleForm.ControlSubject1"
              >
                <Form.Label>
                  Date{" "}
                  <i className="text-xs">
                    Please note the date selected may not be available
                  </i>
                </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group
                className="m-2 mb-3"
                controlId="exampleForm.ControlSubject1"
              >
                <Form.Label>
                  Time{" "}
                  <i className="text-xs">
                   Please note the time selected may not be available
                  </i>
                </Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </div>
            <Form.Group
              className="m-2 mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Reason For Appointment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-81" onClick={handleClose}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTest;
