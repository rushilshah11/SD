import React from "react";
import "./services.css";

function ModalTest(props) {
  
  return (
    <>
      <div className="">
        <button
          onClick={() =>
            window.open(
              "https://patient.rocks/Dashboard/PatientDashboard/ZGFlN2M3NDUtMWJmYi00MDU5LTk0MmMtZDNmMTBh/MA==",
              "_blank",
              "noopener,noreferrer"
            )
          }
          className="button-81"
        >
          Book Appointment
        </button>
      </div>
    </>
  );
}

export default ModalTest;
