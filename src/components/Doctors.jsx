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

  // const remove = (item) => {
  //   setList(data => {
  //     return data.filter (info => info !== item)
  //   })
  // }

  const remove = (item) => {
    setList((data) => {
      return data.filter((info) => info !== item);
    });
  };

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
            <AppointmentList list={list} remove={remove}></AppointmentList>
          </div>
        ) : (
          <div className="d-flex justify-content-center mt-5"><img className="w-50" src="./img/appointment.jpg" alt="" /></div>
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
