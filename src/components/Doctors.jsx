import { doctorData } from "../helpers/data";
import "../css/doctors.css";
import AddModal from "./AddModal";
import { useState } from "react";
import AppointmentList from "./AppointmentList";

const Doctors = () => {
  const [show, setShow] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const [appointment, setAppointment] = useState({
    id: "",
    patient: "",
    day: "",
    doctor: "",
    time: "",
  });
  const [list, setList] = useState([]);
  const { patient, day } = appointment;

  console.log(list);

  const clickCard = (e) => {
    setDoctorName(e.name);
    setShow(true);
  };

  const handledata = (e) => {
    setAppointment({
      ...appointment,
      [e.target.id]: e.target.value,
      doctor: doctorName,
      id: new Date().getTime(),
      time: new Date().toLocaleTimeString(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    setList([...list, appointment]);
    setAppointment({ patient: "", day: "", doctor: "", id: "" });
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
      <div className="appointmentList">
        {list.length ? (
          <div>
            <AppointmentList list={list}></AppointmentList>
          </div>
        ) : (
          <div>bos</div>
        )}
      </div>
      <>
        {
          <AddModal
            doctorName={doctorName}
            show={show}
            patient={patient}
            day={day}
            handleClose={handleClose}
            handleSubmit={handleSubmit}
            handledata={handledata}
          ></AddModal>
        }
      </>
    </div>
  );
};

export default Doctors;
