import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./services.css";
import { db } from "../index";

function ModalTest(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();
    db.collection("bookAppointment")
      .add({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        date: date,
        time: time,
        reason: reason,
      })
      .then(() => {
        alert("Appointment has been booked!");
        setShow(false);
      })
      .catch(error => {
        alert(error.message)
      })

      setFirstName(' ')
      setLastName(' ');
      setPhone(' ');
      setEmail(' ');
      setDate(' ');
      setTime(' ');
      setReason(' ');
  };



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
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="m-2 mb-3"
                controlId="exampleForm.ControlSubject1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </div>

            <Form.Group
              className="m-2 mb-3"
              controlId="exampleForm.ControlSubject1"
            >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="subject"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="m-2 mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
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
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
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
                <Form.Control
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>
            </div>
            <Form.Group
              className="m-2 mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Reason For Appointment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="button-81" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTest;
