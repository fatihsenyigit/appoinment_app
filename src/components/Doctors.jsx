import { doctorData } from "../helpers/data";
import "../css/doctors.css";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [showAppointment, setShowAppointment] = useState([]);
  let appointmentData = [];
  const [doctorName, setDoctorName] = useState("");


  const clickCard = (e) => {
    setDoctorName(e)
    setShow(true);
  };

  const handleSubmit = (e) => {
    setShow(false);
    const element = e.target.closest("Form");
    const patient = element.querySelector(".input1").value;
    const day = element.querySelector(".date1").value;
    const doctor =
      element.parentNode.previousSibling.querySelector(".title1").innerText;
    const aaa = {
      id: new Date(),
      patient: patient,
      doctor: doctor,
      day:day,
      time: new Date(),
    };
    console.log(aaa);
  };
  const handleClose = () => setShow(false);
  return (
    <div className="doctors container">
      <div className="row gap-5 justify-content-center">
        {doctorData.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => clickCard(doctor)}
            className="doctorCard"
          >
            <img src={doctor.img} alt="" />
            <h6>{doctor.name}</h6>
            <p>{doctor.dep}</p>
          </div>
        ))}
      </div>
      <>
        {
          <AddModal
            doctorName={doctorName}
            show={show}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
          ></AddModal>
        }
      </>
    </div>
  );
};

export default Doctors;
