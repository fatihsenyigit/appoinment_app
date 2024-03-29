
import { doctorData } from "../helpers/data"
import '../css/doctors.css'

const Doctors = () => {
    const clickCard = () => {

    }
    return (
      <div className="doctors container">
        <div className="row gap-5 justify-content-center">
          {doctorData.map((doctor) => (
            <div onClick={clickCard} className="doctorCard">
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