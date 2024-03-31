import { Container } from "react-bootstrap"
import '../css/AppointmentList.css'


const AppointmentList = ({list}) => {
    
    return (
        <div>
            {list.map((e)=>(
                
                <Container>
                    <h1>Appointment List</h1>
                    <div className="left">
                        <h3>{e.patient}</h3>
                        <h4>{e.doctor}</h4>
                    </div>
                    <div className="middle">
                        <h3>{e.day}</h3>
                        <h4>{e.time}</h4>
                    </div>
                    <div className="right">
                        <button className="btn">X</button>
                    </div>
                </Container>
            ))}
        </div>
    )
}

export default AppointmentList