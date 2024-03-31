import { Container } from "react-bootstrap"
import '../css/AppointmentList.css'


const AppointmentList = ({list, remove}) => {
    
    return (
      <div className="list-container">
        <h1>Appointment List</h1>
        {list.map((e) => (
          <Container key={e.id} className="mainBody">
            <div className="left">
              <h3>{e.patient}</h3>
              <h4>{e.doctor}</h4>
            </div>
            <div className="middle">
              <h3>{e.day}</h3>
              <h4>{e.time}</h4>
            </div>
            <div className="right">
              <button onClick={()=>remove(e)} className="btn">X</button>
            </div>
          </Container>
        ))}
      </div>
    );
}

export default AppointmentList