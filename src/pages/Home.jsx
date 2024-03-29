
// import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import AppointmentList from '../components/AppointmentList';
import Doctors from '../components/Doctors';

const Home = () => {
    return (
      <Container className="homePage">
        <div className="homeHeader">
          <h1>Saigon Hospital</h1>
          <h3>Our Doctors</h3>
        </div>
        <div className="doctorsContainer">
            <Doctors></Doctors>
        </div>
        <div className="appointmentList">
          <AppointmentList></AppointmentList>
        </div>
      </Container>
    );
}

export default Home