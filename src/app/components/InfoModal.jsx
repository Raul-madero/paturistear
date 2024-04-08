import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Card, CardBody, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap"

const InfoModal = (props) => {
    const imgURL = "https://i.ibb.co/sHT05J4/pexels-pablo-cordero-3845970.jpg"
  return (
    <Modal 
    {...props}
    size="lg"
    aria-labbelledby="contained-modal-title-vcenter"
    centered
    className="d-flex"
    >
        <Container>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">Estadio Santiago Bernabeu</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <h4>Visita el estadio</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, dolores culpa optio totam vitae expedita temporibus aspernatur, rerum hic, assumenda corporis quos? Atque explicabo ex sapiente earum quaerat alias omnis.</p>
            </ModalBody>
            <ModalFooter>
                <Button variant="primary">Cerrar</Button>
            </ModalFooter>
        </Container>
        <Container>
            <Card>
                <CardImg variant="top" src={imgURL} />
                <CardBody>
                    <Button variant="outline-warning">
                        <FontAwesomeIcon icon={faBookmark} />
                    </Button>
                    <Button variant="outline-warning">
                        <FontAwesomeIcon icon={faLocationDot} />
                    </Button>
                </CardBody>
            </Card>
        </Container>
    </Modal>

  )
}
export default InfoModal