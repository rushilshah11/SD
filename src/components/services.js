import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./services.css";

function ServicesPage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const services = [
    {
      title: "Restorative Dentistry",
      link: "https://en.wikipedia.org/wiki/Restorative_dentistry",
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Dental_materialComposite">
          Composite (Tooth-Colored) Dental Fillings
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Bridge_(dentistry)">
          Dental Bridges
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Dental_implant">
          Dental Implants (Restoration)
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Inlays_and_onlays">
          Dental Inlays
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Inlays_and_onlays">
          Dental Onlays
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Crown_(dental_restoration)">
          Dental Crowns
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Removable_partial_denture">
          Partial Dentures
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Dentures">
          Dentures (Upper and Lower)
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Dentures">Denture Repair</a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Periodontology">Periodontics</a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Scaling_and_root_planing">
          Root Planning
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Scaling_and_root_planing">
          Scaling
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Endodontics">Endodontics</a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Root_canal_treatment">
          Root Canal Therapy
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Root_canal_treatment">
          Single Visit Root Canals
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Endodontic_crown">
          Molar Endodontics
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Oral_and_maxillofacial_surgery">
          Oral Surgery
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Dental_extraction">
          Simple Tooth Extractions
        </a>
      ),
    },
    {
      title: (
        <a href="https://en.wikipedia.org/wiki/Impacted_wisdom_teeth">
          Non-Impacted Wisdom Teeth
        </a>
      ),
    },
  ];

  return (
    <>
      <Button onClick={handleShow} variant="outline-success">
        Services
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-wrap justify-center grid grid-cols-2 grid-flow-row">
              {services.map((service) => {
                return (
                  <Card>
                    <Card.Body className="text-center">
                      <Card.Title>
                        <a
                          href= {service.link}
                          className="no-underline text-color"
                        >
                          <p className="hover:text-sky-700">{service.title}</p>
                        </a>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ServicesPage;
