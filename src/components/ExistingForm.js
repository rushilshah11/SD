import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ExtractionModal() {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const extractionLinks = [
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheet.aspx?P=4426&S=9878&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheetMobile.aspx?P=4426&S=9878&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheet.aspx?P=4426&S=9879&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheetMobile.aspx?P=4426&S=9879&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheet.aspx?P=4426&S=9880&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheetMobile.aspx?P=4426&S=9880&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheet.aspx?P=4426&S=9881&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheetMobile.aspx?P=4426&S=9881&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheet.aspx?P=4426&S=9882&L=&F=&NFID=",
    "https://newpatientinfo.net/PracticeWebSite/PracticeWebSheetMobile.aspx?P=4426&S=9882&L=&F=&NFID=",
  ];

  const titles = [
    "Extraction (PC/Laptop)",
    "Extraction (Mobile/Tablet)",
    "Fillings (PC/Laptop)",
    "Fillings (Mobile/Tablet)",
    "Partial Denture (PC/Laptop)",
    "Partial Denture (Mobile/Tablet)",
    "Root Canal (PC/Laptop)",
    "Root Canal (Mobile/Tablet)",
    "Scaling & Root Planing (PC/Laptop)",
    "Scaling & Root Planing (Mobile/Tablet)",
  ];

  return (
    <>
      <button onClick={handleOpen} className="button-81">
        Existing Patient Forms
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Existing Patient Forms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-3">
            {extractionLinks.map((link, index) => (
              <button
                key={index}
                onClick={() =>
                  window.open(link, "_blank", "noopener,noreferrer")
                }
                className="button-81"
                style={{ backgroundColor: "#4A707A", color: "#fff" }}
              >
                {titles[index]}
              </button>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p className="text-sm text-gray-500 mr-auto">
            Need another language? In Chrome, click the 3 dots in the top right
            and select “Translate.”
          </p>
          <button onClick={handleClose} className="button-81">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExtractionModal;
