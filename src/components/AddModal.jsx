import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddModal = ({
  show,
  handleClose,
  doctorName,
  handleSubmit,
  patient,
  day,
  handledata
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title1">{doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="group1 mb-3"
            >
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                autoFocus
                className="input1"
                value={patient}
                id="patient"
                onChange={handledata}
                required
              />
            </Form.Group>
            <Form.Group
              className="group2 mb-3"
            >
              <Form.Label>Date:</Form.Label>
              <Form.Control
                className="date1"
                type="date"
                rows={3}
                value={day}
                id="day"
                onChange={handledata}
                required
              />
            </Form.Group>
            <Container className="d-flex gap-3 justify-content-center">
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Container>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddModal;
