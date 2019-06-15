import React from 'react';
import { Card, CardImg, CardTitle, CardBody, Container, Row, Col } from 'reactstrap';
import { PlainCard } from './PlainCard.js';
import { ImgCard } from './ImgCard.js';
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

        <h3>Start of the Workday - <i>Inicio del día de trabajo</i></h3>
        <PlainCard english='Good Morning' phonetic='[gud mornin]' spanish='Buenos días' audio='./audio/mp3/1.a.mp3' />
        <PlainCard english='I’m ___________. I am a worker from ____________. Nice to meet  you.'
          phonetic='[aim ___________. Aim a wurker fram __________. Nais tu mit yu]'
          spanish='Yo soy __________. Soy un trabajador de __________. Es un placer conocerlo/a.'
          audio='./audio/mp3/1.b.mp3' />
        <PlainCard english='What will I be doing today?' phonetic='[Guat wil ai bi duin tudei]' spanish='¿Qué voy a hacer hoy?'
          audio='./audio/mp3/1.c.mp3' />
        <PlainCard english='What type of gardening work do you need done?' phonetic='[Guat taip of gardenin work du yu nid dan]'
          spanish='¿Qué trabajo necesita hacer en el jardin?' audio='./audio/mp3/1.d.mp3' />

        <h3>Gardening Tools & Materials - <i>Herramientas y materiales para jardinería</i></h3>
        <PlainCard english='Do you have ____________ ?' phonetic='[Du yu jav] ____________' spanish='¿Usted tiene ____________ ?'
          audio='./audio/mp3/2.a.mp3' />
        <PlainCard english='Can I have a ______________ ?' phonetic='[Can ai jav] ______________ ?' spanish='¿Puedo tener _____________?'
          audio='./audio/mp3/2.b.mp3' />
        <ImgCard image='./images/garden_rake.pdf' alt='garden rake' english='Garden rake' phonetic='[garden reik]'
          spanish='rastrillo de jardin' audio='./audio/mp3/2.j.mp3' />
        <ImgCard image='./images/broom.pdf' alt='garden rake' english='Broom' phonetic='[brum]' spanish='escoba'
          audio='./audio/mp3/2.q.mp3' />
        <ImgCard image='./images/leaf_rake.pdf' alt='leaf rake' english='Leaf rake' phonetic='[lif reik]'
          spanish='rastrillo para hojas' audio='./audio/mp3/2.k.mp3' />
        <ImgCard image='./images/pitch_fork.pdf' alt='pitch fork' english='Pitch Fork' phonetic='[pich fork]'
          spanish='trinche, tenedor grande' audio='./audio/mp3/2.i.mp3' />
        <ImgCard image='./images/blower.pdf' alt='blower' english='Blower' phonetic='[bloer]' spanish='sopladora'
          audio='./audio/mp3/2.p.mp3' />
        <ImgCard image='./images/wheel_barrow.pdf' alt='wheel barrow' english='Wheel barrow' phonetic='[uil bero]'
          spanish='Carretilla' audio='./audio/mp3/2.w.mp3' />
        <ImgCard image='./images/trowel.pdf' alt='trowel' english='Trowel' phonetic='[trauwel]'
          spanish='palita de jardinería' audio='./audio/mp3/2.f.mp3' />
        <ImgCard image='./images/pick.pdf' alt='pick' english='Pick' phonetic='[pic]' spanish='pico' audio='./audio/mp3/2.g.mp3' />
        <ImgCard image='./images/hoe.pdf' alt='hoe' english='Hoe' phonetic='[jo]' spanish='azadon' audio='./audio/mp3/2.h.mp3' />
        <ImgCard image='./images/weeder.pdf' alt='weeder' english='Weeder' phonetic='[uider]'
          spanish='escarbador' audio='./audio/mp3/2.m.mp3' />
        <ImgCard image='./images/shovel.pdf' alt='shovel' english='Shovel' phonetic='[shavel]' spanish='pala' audio='./audio/mp3/2.c.mp3' />
        <ImgCard image='./images/lawn_mower.pdf' alt='lawn mower' english='Lawn mower' phonetic='[lan móer]'
          spanish='Podadora de pasto' audio='./audio/mp3/2.o.mp3' />
        <ImgCard image='./images/aerator.pdf' alt='aerator' english='Aerator' phonetic='[ereiter]' spanish='aireador' audio='./audio/mp3/' />
        <ImgCard image='./images/electric_hedger.pdf' alt='electric hedger' english='Electric hedger' phonetic='[electric jedcher]'
          spanish='cortadora' audio='./audio/mp3/2.n.mp3' />
        <ImgCard image='./images/weed_eater.pdf' alt='weed eater' english='Weed eater' phonetic='[wid iter] '
          spanish='deshierbadora' audio='./audio/mp3/2.l.mp3' />
        <ImgCard image='./images/clippers.pdf' alt='clippers' english='Clippers' phonetic='[clíperz]'
          spanish='tijeras' audio='./audio/mp3/2.d.mp3' />
        <ImgCard image='./images/pruning_shears.pdf' alt='pruning shears' english='Pruning Shears' phonetic='[prúning shirz]'
          spanish='tijeras de podar' audio='./audio/mp3/2.e.mp3' />
        <ImgCard image='./images/flower_pot.pdf' alt='flower pot' english='Flower pot' phonetic='[flauer  pat]'
          spanish='maceta' audio='./audio/mp3/2.x.mp3' />
        <ImgCard image='./images/nozzle.pdf' alt='nozzle' english='Nozzle' phonetic='[nahsel]' spanish='boquilla'
          audio='./audio/mp3/2.s.mp3' />
        <ImgCard image='./images/watering_can.pdf' alt='watering can' english='Watering can' phonetic='[uádering can]'
          spanish='bote para regar' audio='./audio/mp3/' />
        <ImgCard image='./images/hose.pdf' alt='hose' english='Hose' phonetic='[joz]' spanish='manguera' audio='./audio/mp3/2.r.mp3' />
        <ImgCard image='./images/plastic_bag.pdf' alt='plastic bag' english='Plastic bag' phonetic='[plástic bag]'
          spanish='bolsa de plástico' audio='./audio/mp3/2.u.mp3' />
        <ImgCard image='./images/garbage_can.pdf' alt='garbage can' english='Garbage can' phonetic='[garbech can]'
          spanish='basurero' audio='./audio/mp3/2.t.mp3' />
        <ImgCard image='./images/yard_waste_bags.pdf' alt='yard waste bags' english='Yard waste bags' phonetic='[iard uest bags]'
          spanish='bolsas para la basura del jardín' audio='./audio/mp3/2.v.mp3' />



        <h3>Elements of the Garden - <i>Elementos en un jardín</i></h3>

        <h3>Questions for the Employer - <i>Preguntas para el/la empleador/a</i></h3>

        <h3>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h3>

        <h3>Common Gardening Tasks - <i>Tareas comunes de jardinería</i></h3>

        <h3>Health and Safety - <i>Equipo de seguridad</i></h3>

        <h3>Negotiating Pay - <i>Negociación de pago</i></h3>

        <h3>Questions for Clarification - <i>Preguntas para aclarar</i></h3>

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

        <a id="start-of-workday"><h3>Start of the Workday - <i>Inicio del día de trabajo</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='Good Morning' phonetic='[gud mornin]' spanish='Buenos días' audio='./audio/mp3/1.a.mp3' />
          </Col>
          <Col>
            <PlainCard english='I’m ___________. I am a worker from ____________. Nice to meet  you.'
              phonetic='[aim ___________. Aim a wurker fram __________. Nais tu mit yu]'
              spanish='Yo soy __________. Soy un trabajador de __________. Es un placer conocerlo/a.'
              audio='./audio/mp3/1.b.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='What will I be doing today?' phonetic='[Guat wil ai bi duin tudei]' spanish='¿Qué voy a hacer hoy?'
              audio='./audio/mp3/1.c.mp3' />
          </Col>
          <Col>
            <PlainCard english='What type of gardening work do you need done?' phonetic='[Guat taip of gardenin work du yu nid dan]'
              spanish='¿Qué trabajo necesita hacer en el jardin?' audio='./audio/mp3/1.d.mp3' />
          </Col>
        </Row>




        <a id="tools-and-materials"><h3>Gardening Tools & Materials - <i>Herramientas y materiales para jardinería</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='Do you have ____________ ?' phonetic='[Du yu jav] ____________' spanish='¿Usted tiene ____________ ?'
              audio='./audio/mp3/2.a.mp3' />
          </Col>
          <Col>
            <PlainCard english='Can I have a ______________ ?' phonetic='[Can ai jav] ______________ ?' spanish='¿Puedo tener _____________?'
              audio='./audio/mp3/2.b.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/garden_rake.pdf' alt='garden rake' english='Garden rake' phonetic='[garden reik]'
              spanish='rastrillo de jardin' audio='./audio/mp3/2.j.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/broom.pdf' alt='garden rake' english='Broom' phonetic='[brum]' spanish='escoba'
              audio='./audio/mp3/2.q.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/leaf_rake.pdf' alt='leaf rake' english='Leaf rake' phonetic='[lif reik]'
              spanish='rastrillo para hojas' audio='./audio/mp3/2.k.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/pitch_fork.pdf' alt='pitch fork' english='Pitch Fork' phonetic='[pich fork]'
              spanish='trinche, tenedor grande' audio='./audio/mp3/2.i.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/blower.pdf' alt='blower' english='Blower' phonetic='[bloer]' spanish='sopladora'
              audio='./audio/mp3/2.p.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/wheel_barrow.pdf' alt='wheel barrow' english='Wheel barrow' phonetic='[uil bero]'
              spanish='Carretilla' audio='./audio/mp3/2.w.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/trowel.pdf' alt='trowel' english='Trowel' phonetic='[trauwel]'
              spanish='palita de jardinería' audio='./audio/mp3/2.f.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/pick.pdf' alt='pick' english='Pick' phonetic='[pic]' spanish='pico' audio='./audio/mp3/2.g.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/hoe.pdf' alt='hoe' english='Hoe' phonetic='[jo]' spanish='azadon' audio='./audio/mp3/2.h.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/weeder.pdf' alt='weeder' english='Weeder' phonetic='[uider]'
              spanish='escarbador' audio='./audio/mp3/2.m.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/shovel.pdf' alt='shovel' english='Shovel' phonetic='[shavel]' spanish='pala' audio='./audio/mp3/2.c.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/lawn_mower.pdf' alt='lawn mower' english='Lawn mower' phonetic='[lan móer]'
              spanish='Podadora de pasto' audio='./audio/mp3/2.o.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/aerator.pdf' alt='aerator' english='Aerator' phonetic='[ereiter]' spanish='aireador' audio='./audio/mp3/' />
          </Col>
          <Col>
            <ImgCard image='./images/electric_hedger.pdf' alt='electric hedger' english='Electric hedger' phonetic='[electric jedcher]'
              spanish='cortadora' audio='./audio/mp3/2.n.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/weed_eater.pdf' alt='weed eater' english='Weed eater' phonetic='[wid iter] '
              spanish='deshierbadora' audio='./audio/mp3/2.l.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/clippers.pdf' alt='clippers' english='Clippers' phonetic='[clíperz]'
              spanish='tijeras' audio='./audio/mp3/2.d.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/pruning_shears.pdf' alt='pruning shears' english='Pruning Shears' phonetic='[prúning shirz]'
              spanish='tijeras de podar' audio='./audio/mp3/2.e.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/flower_pot.pdf' alt='flower pot' english='Flower pot' phonetic='[flauer  pat]'
              spanish='maceta' audio='./audio/mp3/2.x.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/nozzle.pdf' alt='nozzle' english='Nozzle' phonetic='[nahsel]' spanish='boquilla'
              audio='./audio/mp3/2.s.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/watering_can.pdf' alt='watering can' english='Watering can' phonetic='[uádering can]'
              spanish='bote para regar' audio='./audio/mp3/' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/hose.pdf' alt='hose' english='Hose' phonetic='[joz]' spanish='manguera' audio='./audio/mp3/2.r.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/plastic_bag.pdf' alt='plastic bag' english='Plastic bag' phonetic='[plástic bag]'
              spanish='bolsa de plástico' audio='./audio/mp3/2.u.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/garbage_can.pdf' alt='garbage can' english='Garbage can' phonetic='[garbech can]'
              spanish='basurero' audio='./audio/mp3/2.t.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/yard_waste_bags.pdf' alt='yard waste bags' english='Yard waste bags' phonetic='[iard uest bags]'
              spanish='bolsas para la basura del jardín' audio='./audio/mp3/2.v.mp3' />
          </Col>
        </Row>

        <a id="elements-of-garden"><h3>Elements of the Garden - <i>Elementos en un jardín</i></h3></a>

        <a id="employer-questions"><h3>Questions for the Employer - <i>Preguntas para el/la empleador/a</i></h3></a>

        <a id="gardener-instructions"><h3>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h3></a>

        <a id="common-tasks"><h3>Common Gardening Tasks - <i>Tareas comunes de jardinería</i></h3></a>

        <a id="health-and-safety"><h3>Health and Safety - <i>Equipo de seguridad</i></h3></a>

        <a id="negotiating-pay"><h3>Negotiating Pay - <i>Negociación de pago</i></h3></a>

        <a id="clarification-questions"><h3>Questions for Clarification - <i>Preguntas para aclarar</i></h3></a>

      </div>

    </div>
  );
}

export default App;
