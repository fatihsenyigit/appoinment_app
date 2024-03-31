import { Container } from "react-bootstrap"


const AppointmentList = ({list}) => {
    
    return (
        <div>
            {list.map((e)=>(
                <Container>
                    <h1>Appointment List</h1>
                    <div className="left">
                        <h3>{list.patient}</h3>
                        <h4>{list.doctor}</h4>
                    </div>
                    <div className="middle">
                        <h3>{list.day}</h3>
                        <h4>{list.time}</h4>
                    </div>
                    <div className="right">
                        <img src="" alt="" />
                    </div>
                </Container>
            ))}
        </div>
    )
}

export default AppointmentList