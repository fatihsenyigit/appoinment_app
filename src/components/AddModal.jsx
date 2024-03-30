import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddModal = ({ show, handleClose, doctorName, handleSubmit }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title1">{doctorName?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="group1 mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Patient Name:</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter full name"
                autoFocus
                required
                className="input1"
              />
            </Form.Group>
            <Form.Group
              className="group2 mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Date:</Form.Label>
              <Form.Control className="date1" required type="date" rows={3} />
            </Form.Group>
            <Container className="d-flex gap-3 justify-content-center">
              <Button variant="success" onClick={(e) => handleSubmit(e)}>
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
