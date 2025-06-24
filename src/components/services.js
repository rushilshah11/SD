import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
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
      title: "Composite (Tooth-Colored) Dental Fillings",
      link: "https://en.wikipedia.org/wiki/Dental_materialComposite",
    },
    {
      title: "Dental Bridges",
      link: "https://en.wikipedia.org/wiki/Bridge_(dentistry)",
    },
    {
      title: "Dental Implants (Restoration)",
      link: "https://en.wikipedia.org/wiki/Dental_implant",
    },
    {
      title: "Dental Inlays",
      link: "https://en.wikipedia.org/wiki/Inlays_and_onlays",
    },
    {
      title: "Dental Onlays",
      link: "https://en.wikipedia.org/wiki/Inlays_and_onlays",
    },
    {
      title: "Dental Crowns",
      link: "https://en.wikipedia.org/wiki/Crown_(dental_restoration)",
    },
    {
      title: "Partial Dentures",
      link: "https://en.wikipedia.org/wiki/Removable_partial_denture",
    },
    {
      title: "Dentures (Upper and Lower)",
      link: "https://en.wikipedia.org/wiki/Dentures",
    },
    {
      title: "Denture Repair",
      link: "https://en.wikipedia.org/wiki/Dentures",
    },
    {
      title: "Periodontics",
      link: "https://en.wikipedia.org/wiki/Periodontology",
    },
    {
      title: "Root Planning",
      link: "https://en.wikipedia.org/wiki/Scaling_and_root_planing",
    },
    {
      title: "Scaling",
      link: "https://en.wikipedia.org/wiki/Scaling_and_root_planing",
    },
    {
      title: "Endodontics",
      link: "https://en.wikipedia.org/wiki/Endodontics",
    },
    {
      title: "Root Canal Therapy",
      link: "https://en.wikipedia.org/wiki/Root_canal_treatment",
    },
    {
      title: "Single Visit Root Canals",
      link: "https://en.wikipedia.org/wiki/Root_canal_treatment",
    },
    {
      title: "Molar Endodontics",
      link: "https://en.wikipedia.org/wiki/Endodontic_crown",
    },
    {
      title: "Oral Surgery",
      link: "https://en.wikipedia.org/wiki/Oral_and_maxillofacial_surgery",
    },
    {
      title: "Simple Tooth Extractions",
      link: "https://en.wikipedia.org/wiki/Dental_extraction",
    },
    {
      title: "Non-Impacted Wisdom Teeth",
      link: "https://en.wikipedia.org/wiki/Impacted_wisdom_teeth",
    },
  ];

  return (
    <>
      <button className="button-81" onClick={handleShow}>
      Services
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-wrap justify-center grid grid-cols-2 grid-flow-row">
            {services.map((service) => {
              return (
                <Card className="m-2">
                  <Card.Body className="text-center">
                    <Card.Title>
                      <a
                        href={service.link}
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
          <button className="button-81" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ServicesPage;
