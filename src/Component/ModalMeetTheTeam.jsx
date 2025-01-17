import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import "../Css/ModalMeetTheTeam.css";

const ModalMeetTheTeam = ({ showModal, setShowModal, img, designation, name , descpara,}) => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  // const [show, setShow] = useState({showModal});

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    // setShow(true);
  }
  return (
    <>
      {/* {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Full screen
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))} */}

      <Modal show={showModal} style={{backgroundColor:'white'}} fullscreen={fullscreen} onHide={() => setShowModal(!showModal)}>
        <Container className='content-modal'>
          <Modal.Header closeButton>

            <Modal.Title>Team</Modal.Title>
          </Modal.Header>
          <Modal.Body className='grid-example'>
            <Container>
              <Row>
                <Col xs={6} md={6}>
                  <div>
                    <img src={img} />
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <div className='modal-team-title'>
                    <div className=''>
                      <h4>{name}</h4>
                      <span>
                        {designation}
                      </span>
                      {/* <span>
                        qwerty
                      </span> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <p className='modal-team-para'>
             {descpara}
            </p>
          </Modal.Body>
        </Container>
      </Modal>

    </>
  )
}

export default ModalMeetTheTeam