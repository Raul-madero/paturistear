'use client'
import InfoModal from "@/app/components/InfoModal"
import { useState } from "react"
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Container } from "react-bootstrap"

const Rutas = () => {
  const [modalShow, setModalShow] = useState(false)

  const imgURL = "https://i.ibb.co/sHT05J4/pexels-pablo-cordero-3845970.jpg"

  return (
    <Container className="d-flex gap-4 justify-content-between align-items-center flex-wrap my-4">
      <Card style={{"width": "30%"}}>
        <CardImg variant="top" src={imgURL} />
        <CardBody>
          <CardTitle>Estadio Santiago Bernabeu</CardTitle>
          <CardText>El estadio mas emblematico de España te espera para que recorras sus entrañas</CardText>
        </CardBody>
        <Button onClick={() => setModalShow(true)} variant="warning" className="btn-sm mb-2 mx-auto">Ver Ruta</Button>
      </Card>
      <Card style={{"width": "30%"}}>
        <CardImg variant="top" src={imgURL} />
        <CardBody>
          <CardTitle>Estadio Santiago Bernabeu</CardTitle>
          <CardText>El estadio mas emblematico de España te espera para que recorras sus entrañas</CardText>
        </CardBody>
        <Button onClick={() => setModalShow(true)} variant="warning" className="btn-sm mb-2 mx-auto">Ver Ruta</Button>
      </Card>
      <Card style={{"width": "30%"}}>
        <CardImg variant="top" src={imgURL} />
        <CardBody>
          <CardTitle>Estadio Santiago Bernabeu</CardTitle>
          <CardText>El estadio mas emblematico de España te espera para que recorras sus entrañas</CardText>
        </CardBody>
        <Button onClick={() => setModalShow(true)} variant="warning" className="btn-sm mb-2 mx-auto">Ver Ruta</Button>
      </Card>
      <InfoModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
    
}

export default Rutas