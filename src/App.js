import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardBody, Container, Row, Col } from 'reactstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        ¡Hola!
      </h1>
      <p>
        Este material provee el vocabulario básico en inglés para las personas que trabajan en jardinería.  Todo el contenido de este libro
        fue desarrollado por jornaleros y jornaleras que trabajen en la jardinería.  Practique para mejorar la comunicación con sus empleadores
        y para tener éxito en el trabajo.
      </p>

      <div className="smallScreen">
        <Card className='guide'>
          <CardTitle>
            <h2 style={{ 'textAlign': 'center' }}>Cómo usar esta guía</h2>
          </CardTitle>
          <CardBody>
            <Container>
              <Row style={{ 'textAlign': 'center' }}>
                <Col xs={{ size: 5 }}>
                  <b>Inglés</b> <br></br>
                </Col>
                <Col xs={{ size: 7 }}>
                  <b>What will I be doing today?</b> <br></br>
                </Col>
              </Row>
              <Row style={{ 'textAlign': 'center' }}>
                <Col xs={{ size: 5 }}>
                  Pronunciación <br></br>
                </Col>
                <Col xs={{ size: 7 }}>
                  [Guat wil ai bi duin tudei] <br></br>
                </Col>
              </Row>
              <Row style={{ 'textAlign': 'center' }}>
                <Col xs={{ size: 5 }}>
                  <i>Español</i>
                </Col>
                <Col xs={{ size: 7 }}>
                  <i>¿Qué voy a hacer hoy?</i>
                </Col>
              </Row>
            </Container>
          </CardBody>
        </Card>
      </div>

      <div className="bigScreen">
        <Container>
          <Row>
            <Col xs={{ size: 4 }}>
              <Card>
                <CardBody>
                  <a href="#start-of-workday">Start of the Workday<br></br></a>
                  <a href="#tools-and-materials">Gardening Tools & Materials<br></br></a>
                  <a href="#elements-of-garden">Elements of the Garden<br></br></a>
                  <a href="#employer-questions">Questions for the Employer<br></br></a>
                  <a href="#gardener-instructions">Instructions for the Gardener<br></br></a>
                  <a href="#common-tasks">Common Gardening Tasks<br></br></a>
                  <a href="#health-and-safety">Health and Safety<br></br></a>
                  <a href="#negotiating-pay">Negotiating Pay<br></br></a>
                  <a href="#clarification-questions">Questions for Clarification<br></br></a>
                </CardBody>
              </Card>
            </Col>

            <Col className="bigCol" xs={{ size: 8 }}>
              <Card className='guide'>
                <CardTitle>
                  <h2 style={{ 'textAlign': 'center' }}>Cómo usar esta guía</h2>
                </CardTitle>
                <CardBody>
                  <Container>
                    <Row style={{ 'textAlign': 'center' }}>
                      <Col xs={{ size: 5 }}>
                        <b>Inglés</b> <br></br>
                      </Col>
                      <Col xs={{ size: 7 }}>
                        <b>What will I be doing today?</b> <br></br>
                      </Col>
                    </Row>
                    <Row style={{ 'textAlign': 'center' }}>
                      <Col xs={{ size: 5 }}>
                        Pronunciación <br></br>
                      </Col>
                      <Col xs={{ size: 7 }}>
                        [Guat wil ai bi duin tudei] <br></br>
                      </Col>
                    </Row>
                    <Row style={{ 'textAlign': 'center' }}>
                      <Col xs={{ size: 5 }}>
                        <i>Español</i>
                      </Col>
                      <Col xs={{ size: 7 }}>
                        <i>¿Qué voy a hacer hoy?</i>
                      </Col>
                    </Row>
                  </Container>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>


      <a id="start-of-workday"><h2>Start of the Workday - <i>Inicio del día de trabajo</i></h2></a>
      <Card>
        <CardBody>
          <Container>
            <Row>
              <b>Good Morning</b>
            </Row>
            <Row>
              [gud mornin]
            </Row>
            <Row>
              <i>Buenos días</i>
            </Row>
            <audio controls>
              <source src='./audio/mp3/1.a.mp3' type='audio/mp3'></source>
            </audio>
          </Container>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Container>
            <Row>
              <b>I’m ___________. I am a worker from ____________. Nice to meet  you.</b>
            </Row>
            <Row>
              [aim ___________. Aim a wurker fram __________. Nais tu mit yu]
            </Row>
            <Row>
              <i>Yo soy __________. Soy un trabajador de __________. Es un placer conocerlo/a.</i>
            </Row>
            <audio controls>
              <source src='./audio/mp3/1.b.mp3' type='audio/mp3'></source>
            </audio>
          </Container>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Container>
            <Row>
              <b>What will I be doing today?</b>
            </Row>
            <Row>
              [Guat wil ai bi duin tudei]
            </Row>
            <Row>
              <i>¿Qué voy a hacer hoy?</i>
            </Row>
            <audio controls>
              <source src='./audio/mp3/1.c.mp3' type='audio/mp3'></source>
            </audio>
          </Container>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Container>
            <Row>
              <b>What type of gardening work do you need done? </b>
            </Row>
            <Row>
              [Guat taip of gardenin work du yu nid dan]
            </Row>
            <Row>
              <i>¿Qué trabajo necesita hacer en el jardin?</i>
            </Row>
            <audio controls>
              <source src='./audio/mp3/1.d.mp3' type='audio/mp3'></source>
            </audio>
          </Container>
        </CardBody>
      </Card>

      <a id="tools-and-materials"><h2>Gardening Tools & Materials - <i>Herramientas y materiales para jardinería</i></h2></a>

      <a id="elements-of-garden"><h2>Elements of the Garden - <i>Elementos en un jardín</i></h2></a>

      <a id="employer-questions"><h2>Questions for the Employer - <i>Preguntas para el/la empleador/a</i></h2></a>

      <a id="gardener-instructions"><h2>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h2></a>

      <a id="common-tasks"><h2>Common Gardening Tasks - <i>Tareas comunes de jardinería</i></h2></a>

      <a id="health-and-safety"><h2>Health and Safety - <i>Equipo de seguridad</i></h2></a>

      <a id="negotiating-pay"><h2>Negotiating Pay - <i>Negociación de pago</i></h2></a>

      <a id="clarification-questions"><h2>Questions for Clarification - <i>Preguntas para aclarar</i></h2></a>
    </div>
  );
}

export default App;
