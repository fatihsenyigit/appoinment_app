
import { doctorData } from "../helpers/data"
import '../css/doctors.css'
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Doctors = () => {
    const [show, setShow] = useState(true);
    const clickCard = () => {
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
                elit. Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          );
        }
    }
    return (
      <div className="doctors container">
        <div className="row gap-5 justify-content-center">
          {doctorData.map((doctor) => (
            <div onClick={()=>clickCard(true)} className="doctorCard">
                <img src={doctor.img} alt="" />
                <h6>{doctor.name}</h6>
                <p>{doctor.dep}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Doctors