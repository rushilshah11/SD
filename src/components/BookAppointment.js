import "../App.css";
import "./BookAppointment.css";
import Navbar from "./Navbar";
import ModalTest from "./modalTest";

function BookAppointment() {
  return (
    <div className="doctorHeading">
      <Navbar></Navbar>
      <div class="row mainBody">
        <div class="col-md-5">
          <div class="doctorText">
            <h1>
              Your New Smile<br></br>Starts Here
            </h1>
            <br></br>
            <p>
              Your smile can have a lasting impression in both personal and
              professional settings. Here at Sunkist Dental, we strive to help
              you in your journey to your best smile.
            </p>
            <br></br>
            <a>
              
              <ModalTest></ModalTest>
            </a>
          </div>
        </div>
        <div class="col-md-7">
          <div class="doctorImg">
            <img
              src="https://media.istockphoto.com/id/1310376604/photo/equipment-in-modern-dentist-clinic.jpg?s=612x612&w=0&k=20&c=-VLNsfcRHCXZcDZKOXlW-qDPeRdMfLjnTm4EKs3MQNo="
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
