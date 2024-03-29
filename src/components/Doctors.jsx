
import { doctorData } from "../helpers/data"
import '../css/doctors.css'
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = () => {
    const [show, setShow] = useState(false)
    const clickCard = () => {
       setShow(true)
    }
    const handleClose = () => setShow(false);
    return (
      <div className="doctors container">
        <div className="row gap-5 justify-content-center">
          {doctorData.map((doctor) => (
            <div onClick={() => clickCard()} className="doctorCard">
              <img src={doctor.img} alt="" />
              <h6>{doctor.name}</h6>
              <p>{doctor.dep}</p>
            </div>
          ))}
        </div>
        <>{show && <AddModal show={show} handleClose={handleClose}></AddModal>}</>
      </div>
    );
}

export default Doctors