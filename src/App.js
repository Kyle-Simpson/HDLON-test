import React from 'react';
import { Card, CardTitle, CardBody, Container, Row, Col } from 'reactstrap';
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

        <a id="start-of-workday"><h3>Start of the Workday - <i>Inicio del día de trabajo</i></h3></a>
        <PlainCard english='Good Morning' phonetic='[gud mornin]' spanish='Buenos días' audio='./audio/mp3/1.a.mp3' />
        <PlainCard english='I’m ___________. I am a worker from ____________. Nice to meet  you.'
          phonetic='[aim ___________. Aim a wurker fram __________. Nais tu mit yu]'
          spanish='Yo soy __________. Soy un trabajador de __________. Es un placer conocerlo/a.'
          audio='./audio/mp3/1.b.mp3' />
        <PlainCard english='What will I be doing today?' phonetic='[Guat wil ai bi duin tudei]' spanish='¿Qué voy a hacer hoy?'
          audio='./audio/mp3/1.c.mp3' />
        <PlainCard english='What type of gardening work do you need done?' phonetic='[Guat taip of gardenin work du yu nid dan]'
          spanish='¿Qué trabajo necesita hacer en el jardin?' audio='./audio/mp3/1.d.mp3' />

        <a id="tools-and-materials"><h3>Gardening Tools & Materials - <i>Herramientas y materiales para jardinería</i></h3></a>
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

        <a id="elements-of-garden"><h3>Elements of the Garden - <i>Elementos en un jardín</i></h3></a>
        <ImgCard image='./images/flower.pdf' alt='flower' english='Flower' phonetic='[flauer]' spanish='flor' audio='./audio/mp3/3.c.mp3' />
        <ImgCard image='./images/stem.pdf' alt='stem' english='Stem' phonetic='[stem]' spanish='tallo' audio='./audio/mp3/3.e.mp3' />
        <ImgCard image='./images/shrub.pdf' alt='bush/shrub' english='Bush / Shrub' phonetic='[bush] / [shrab]' spanish='arbusto' 
          audio='./audio/mp3/3.b.mp3' />
        <ImgCard image='./images/tree.pdf' alt='tree' english='Tree' phonetic='[tri]' spanish='árbol' audio='./audio/mp3/3.a.mp3' />
        <ImgCard image='./images/leaf.pdf' alt='leaf' english='Leaf' phonetic='[lif]' spanish='hoja' audio='./audio/mp3/3.g.mp3' />
        <ImgCard image='./images/branch.pdf' alt='branch' english='Branch' phonetic='[branch]' spanish='rama' audio='./audio/mp3/3.f.mp3' />
        <ImgCard image='./images/trunk.pdf' alt='trunk' english='Trunk' phonetic='[trank]' spanish='tronco' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/roots.pdf' alt='roots' english='Roots' phonetic='[ruts]' spanish='raíces' audio='./audio/mp3/3.i.mp3' />
        <ImgCard image='./images/wood_chips.pdf' alt='wood chips' english='Wood Chips' phonetic='[uod chips]' spanish='astillas de madera' 
          audio='./audio/mp3/3.k.mp3' />
        <ImgCard image='./images/gravel.pdf' alt='gravel' english='Gravel' phonetic='[gravel]' spanish='grava' audio='./audio/mp3/3.l.mp3' />
        <ImgCard image='./images/weed.pdf' alt='weed' english='Weed' phonetic='[wid]' spanish='hierba' audio='./audio/mp3/3.d.mp3' />
        <ImgCard image='./images/grass.pdf' alt='grass' english='Grass' phonetic='[gras]' spanish='césped /grama hierba' 
          audio='./audio/mp3/3.j.mp3' />
        <ImgCard image='./images/topsoil.pdf' alt='topsoil' english='Top Soil' phonetic='[tap soyel]' spanish='capa superior del suelo' 
          audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/compost.pdf' alt='compost' english='Compost' phonetic='[campost]' spanish='abono' audio='./audio/mp3/3.o.mp3' />
        <ImgCard image='./images/subsoil.pdf' alt='subsoil' english='Sub Soil' phonetic='[sab soyel]' spanish='subsuelo' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/bedrock.pdf' alt='bedrock' english='Bedrock' phonetic='[bed rak]' spanish='roca de fondo' audio='./audio/mp3/.mp3' />

        <a id="employer-questions"><h3>Questions for the Employer - <i>Preguntas para el/la empleador/a</i></h3></a>
        <PlainCard english='Where do you want me to work first?' phonetic='[Uer du yu juant mi tu uork furst?]' spanish='¿Dónde quiere que empiece a trabajar?'
          audio='./audio/mp3/4.a.mp3' />
        <PlainCard english='Can you show me which ones are weeds, and which ones are plants?' 
          phonetic='[Can yu sho mi uich uans ar widz, and uich uans ar plantz?]' spanish='¿Puede mostrarme cuáles son hierbas,
          y cuáles son plantas?' audio='./audio/mp3/4.b.mp3' />
        <PlainCard english='Do you want me to save these plants?' phonetic='[du yu juant mi tu seiv dis plants]' 
          spanish='¿Quieres que guarde estas plantas?' audio='./audio/mp3/4.c.mp3' />
        <PlainCard english='Where should I put them?' phonetic='[juer shud ai put dem]' spanish='¿Dónde las pongo?'
          audio='./audio/mp3/4.d.mp3' />
        <PlainCard english='Can I take out these weeds?' phonetic='[Can ai teik aut diz widz?]' spanish='¿Puedo sacar estas hierbas?'
          audio='./audio/mp3/4.e.mp3' />
        <PlainCard english='Where should I leave the yard waste?' phonetic='[Uer shud ai liv tha yard uest?]' 
          spanish='¿Dónde puedo dejar la basura del jardín?' audio='./audio/mp3/4.f.mp3' />
        <PlainCard english='Which trash bin can I use?' phonetic='[Uich trash bin can ai iuz?]' spanish='¿Cuál basurero debo usar?'
          audio='./audio/mp3/4.g.mp3' />
        <PlainCard english='Do you have a compost pile?' phonetic='[du yu hav a campost pail]' spanish='¿Tiene un bote para la basura orgánica?'
          audio='./audio/mp3/4.h.mp3' />
        <PlainCard english='How short do you want the grass?' phonetic='[Jao short du yu uant tha gras?]' spanish='¿Qué tan corto quiere el pasto?'
          audio='./audio/mp3/4.i.mp3' />
        <PlainCard english='The lawnmower is broken.' phonetic='[da lan moer es broken]' spanish='El cortacésped/podadora no funciona.'
          audio='./audio/mp3/4.n.mp3' />
        <PlainCard english='The weed eater needs gas.' phonetic='[da wid iter nids gas]' spanish='La deshierbadora necesita gasolina.'
          audio='./audio/mp3/4.o.mp3' />
        <PlainCard english='How far apart should I set the plants?' phonetic='[jao far apart shud ay set da plants]' 
          spanish='¿A qué distancia una del otra pongo las plantas?' audio='./audio/mp3/4.j.mp3' />
        <PlainCard english='Can you mark where to put the plants?' phonetic='[can yu mark juer tu put da plants]' 
          spanish='¿Puede marcar dónde debo poner las plan- tas?' audio='./audio/mp3/4.k.mp3' />
        <PlainCard english='Do you have any extra pots?' phonetic='[du yu hav eni extra pats]' spanish='¿Tiene usted macetas extras?'
          audio='./audio/mp3/4.l.mp3' />
        <PlainCard english='Do you want me to use fertilizer?' phonetic='[du yu juant mi tu yus fertilaiser]' 
          spanish='¿Quiere que use fertilizante?' audio='./audio/mp3/4.m.mp3' />
        <PlainCard english='Where should I put the tools when I am finished?' phonetic='[juer shud ai put da tuls juen ai am finished]' 
          spanish='¿En donde puedo poner las herramientas cuando termine?' audio='./audio/mp3/4.p.mp3' />

        <a id="gardener-instructions"><h3>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h3></a>
        <PlainCard english='Spread the wood chips.' phonetic='[Spred tha uod chips]' spanish='Esparza las astillas de madera.' 
          audio='./audio/mp3/.mp3' />
        <PlainCard english='Take out these weeds.' phonetic='[Tek aut diz uidz]' spanish='Quite estas hierbas.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Leave these plants.' phonetic='[Liv diz plants]' spanish='Deje estas plantas.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Leave the waste here.' phonetic='[Liv tha uest gíer]' spanish='Ponga la basura aquí.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Move the dirt here.' phonetic='[Muv tha durt gíer]' spanish='Mueva la tierra aquí.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Dig a trench.' phonetic='[Dig a trench.]' spanish='Escarbe una zanja.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Rake the soil.' phonetic='[Rek tha soil]' spanish='Rastrille la tierra.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Water the plants.' phonetic='[juader tha plants]' spanish='Riegue las plantas.' audio='./audio/mp3/.mp3' />
        <PlainCard english='Till the soil first.' phonetic='[Til tha soil furst]' spanish='Revuelve la tierra primero.' audio='./audio/mp3/.mp3' />

        <a id="common-tasks"><h3>Common Gardening Tasks - <i>Tareas comunes de jardinería</i></h3></a>
        <ImgCard image='./images/dig.pdf' alt='dig' english='Dig' phonetic='[deg]' spanish='escarbar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/till.pdf' alt='till' english='Till' phonetic='[til]' spanish='labrar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/rake.pdf' alt='rake' english='Rake' phonetic='[reik]' spanish='rastrillar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/mow.pdf' alt='mowing' english='Mow the lawn' phonetic='[mo da lan]'
          spanish='recortar el césped/pasto' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/spread.pdf' alt='spread' english='Spread' phonetic='[spred]' spanish='esparcir' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/prune.pdf' alt='prune' english='Prune' phonetic='[prun]' spanish='podar/cortar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/hedge.pdf' alt='trim hedge' english='Trim the hedge' phonetic='[trim tha hedch]'
          spanish='recortar el arbusto' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/deadhead.pdf' alt='dead head' english='Dead head' phonetic='[ded jed]'
          spanish='podar las flores marchitas' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/plant.pdf' alt='plant' english='Plant' phonetic='[plant]' spanish='plantar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/watering.pdf' alt='water' english='Water' phonetic='[uáder]' spanish='regar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/transplant.pdf' alt='transplant' english='Transplant' phonetic='[transplant]'
          spanish='trasplantar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/moving.pdf' alt='move' english='Move' phonetic='[muv]'
          spanish='mover' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/remove.pdf' alt='remove' english='Remove' phonetic='[rimuv]'
          spanish='quitar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/takeout.pdf' alt='take out' english='Take out' phonetic='[tek aut]'
          spanish='sacar' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/weeding.pdf' alt='weeding' english='Weeding' phonetic='[uidin]' spanish='deshierbar' audio='./audio/mp3/.mp3' />

        <a id="health-and-safety"><h3>Health and Safety - <i>Equipo de seguridad</i></h3></a>
        <PlainCard english='I need ____________ .' phonetic='[ai nid]' spanish='Yo necesito __________.' audio='./audio/mp3/.mp3' />
        <PlainCard english='I can’t work without __________.' phonetic='I can’t work without .' spanish='No puedo trabajar sin __________.' 
          audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/earplugs.pdf' alt='ear plugs' english='Ear Plugs' phonetic='[ir plogs]' spanish='tapones para los oídos' 
          audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/ear_protection.pdf' alt='ear protection' english='Ear Protection' phonetic='[íer protekchon]' 
          spanish='protección para los oídos' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/boots.pdf' alt='boots' english='Boots' phonetic='[buts]' spanish='botas' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/dust_mask.pdf' alt='dust mask' english='Dust Mask' phonetic='[dost mask]' 
          spanish='máscara para proteger contra el polvo' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/respirator.pdf' alt='respirator' english='Respirator' phonetic='[respereiter]' spanish='respirador' 
          audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/gloves.pdf' alt='gloves' english='Gloves' phonetic='[glovs]' spanish='guantes' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/goggles.pdf' alt='goggles' english='Goggles' phonetic='[gágelz]' spanish='gafas protectoras' audio='./audio/mp3/.mp3' />
        <ImgCard image='./images/safety_glasses.pdf' alt='safety glasses' english='Safety Glasses' phonetic='[sefti glásez]' 
          spanish='lentes protectores' audio='./audio/mp3/.mp3' />

        <a id="negotiating-pay"><h3>Negotiating Pay - <i>Negociación de pago</i></h3></a>
        <PlainCard english='I charge $20 an hour.' phonetic='[Ai charch twenti an auer.]' spanish='Cobro $20 la hora.' 
          audio='./audio/mp3/.mp3' />
        <PlainCard english='I charge $19 an hour for weeding.' phonetic='[ai charch nain-tin an auer for widin]' 
          spanish='Cobro $19 la hora por deshierbar.' audio='./audio/mp3/.mp3' />
        <PlainCard english='I charge $21 an hour for digging.' phonetic='[ai charch twenti juon an auer for deguing]' 
          spanish='Cobro $20 la hora por escarbar.' audio='./audio/mp3/.mp3' />
        <PlainCard english='I charge $22 an hour for landscaping.' phonetic='[ai charch twenti tu an auer for land skeiping.]' 
          spanish='Cobro $22 la hora por jardineria avanzada.' audio='./audio/mp3/.mp3' />
        <PlainCard english='I prefer cash.' phonetic='[ai prefer cash]' spanish='Prefiero efectivo.' audio='./audio/mp3/.mp3' />
        <PlainCard english='I require a minimum of five hours of work.' phonetic='[ai ricuayer a minimam af faiv auers af wurk]' 
          spanish='Yo requiero un mínimo de cinco horas de trabajo.' audio='./audio/mp3/.mp3' />

        <a id="clarification-questions"><h3>Questions for Clarification - <i>Preguntas para aclarar</i></h3></a>
        <PlainCard english='Excuse me?' phonetic='[Ecskiuz mi?]' spanish='¿Discúlpeme? ¿Perdón?' audio='./audio/mp3/.mp3' />
        <PlainCard english='Could you repeat that?' phonetic='[Cud yu ripit that?]' spanish='¿Puede repetir eso?' audio='./audio/mp3/.mp3' />
        <PlainCard english='I am confused.' phonetic='[ai em canfyust]' spanish='Estoy confundido/a' audio='./audio/mp3/.mp3' />
        <PlainCard english='Can you show me?' phonetic='[can yu sho mi]' spanish='¿Puede mostrarme?' audio='./audio/mp3/.mp3' />
        <PlainCard english='Please show me exactly what you want, because I don’t understand.' 
          phonetic='[Plis sho mi eczactli uat yu juant, bicoz ai dont ondorstand.]' 
          spanish='Por favor muéstreme exactamente lo que quiere, porque no entiendo.' audio='./audio/mp3/.mp3' />

      </div>









      <div className="bigScreen">
        <Container>
          <Row>
            <Col xs={{ size: 4 }}>
              <Card>
                <CardBody>
                  <a href="#StartOfWorkday">Start of the Workday<br></br></a>
                  <a href="#ToolsAndMaterials">Gardening Tools & Materials<br></br></a>
                  <a href="#ElementsOfGarden">Elements of the Garden<br></br></a>
                  <a href="#EmployerQuestions">Questions for the Employer<br></br></a>
                  <a href="#GardenerInstructions">Instructions for the Gardener<br></br></a>
                  <a href="#CommonTasks">Common Gardening Tasks<br></br></a>
                  <a href="#HealthAndSafety">Health and Safety<br></br></a>
                  <a href="#NegotiatingPay">Negotiating Pay<br></br></a>
                  <a href="#ClarificationQuestions">Questions for Clarification<br></br></a>
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

        <a id="StartOfWorkday"><h3>Start of the Workday - <i>Inicio del día de trabajo</i></h3></a>
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




        <a id="ToolsAndMaterials"><h3>Gardening Tools & Materials - <i>Herramientas y materiales para jardinería</i></h3></a>
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

        <a id="ElementsOfGarden"><h3>Elements of the Garden - <i>Elementos en un jardín</i></h3></a>
        <Row>
          <Col>
            <ImgCard image='./images/flower.pdf' alt='flower' english='Flower' phonetic='[flauer]' spanish='flor' audio='./audio/mp3/3.c.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/stem.pdf' alt='stem' english='Stem' phonetic='[stem]' spanish='tallo' audio='./audio/mp3/3.e.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/shrub.pdf' alt='bush/shrub' english='Bush / Shrub' phonetic='[bush] / [shrab]' spanish='arbusto' 
              audio='./audio/mp3/3.b.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/tree.pdf' alt='tree' english='Tree' phonetic='[tri]' spanish='árbol' audio='./audio/mp3/3.a.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/leaf.pdf' alt='leaf' english='Leaf' phonetic='[lif]' spanish='hoja' audio='./audio/mp3/3.g.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/branch.pdf' alt='branch' english='Branch' phonetic='[branch]' spanish='rama' audio='./audio/mp3/3.f.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/trunk.pdf' alt='trunk' english='Trunk' phonetic='[trank]' spanish='tronco' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/roots.pdf' alt='roots' english='Roots' phonetic='[ruts]' spanish='raíces' audio='./audio/mp3/3.i.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/wood_chips.pdf' alt='wood chips' english='Wood Chips' phonetic='[uod chips]' spanish='astillas de madera' 
              audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/gravel.pdf' alt='gravel' english='Gravel' phonetic='[gravel]' spanish='grava' audio='./audio/mp3/3.l.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/weed.pdf' alt='weed' english='Weed' phonetic='[wid]' spanish='hierba' audio='./audio/mp3/3.d.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/grass.pdf' alt='grass' english='Grass' phonetic='[gras]' spanish='césped /grama hierba' 
              audio='./audio/mp3/3.j.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/topsoil.pdf' alt='topsoil' english='Top Soil' phonetic='[tap soyel]' spanish='capa superior del suelo' 
              audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/compost.pdf' alt='compost' english='Compost' phonetic='[campost]' spanish='abono' audio='./audio/mp3/3.o.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/subsoil.pdf' alt='subsoil' english='Sub Soil' phonetic='[sab soyel]' spanish='subsuelo' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/bedrock.pdf' alt='bedrock' english='Bedrock' phonetic='[bed rak]' spanish='roca de fondo' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>

        <a id="EmployerQuestions"><h3>Questions for the Employer - <i>Preguntas para el/la empleador/a</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='Where do you want me to work first?' phonetic='[Uer du yu juant mi tu uork furst?]' spanish='¿Dónde quiere que empiece a trabajar?'
              audio='./audio/mp3/4.a.mp3' />
          </Col>
          <Col>
            <PlainCard english='Can you show me which ones are weeds, and which ones are plants?' 
              phonetic='[Can yu sho mi uich uans ar widz, and uich uans ar plantz?]' spanish='¿Puede mostrarme cuáles son hierbas,
              y cuáles son plantas?' audio='./audio/mp3/4.b.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Do you want me to save these plants?' phonetic='[du yu juant mi tu seiv dis plants]' 
              spanish='¿Quieres que guarde estas plantas?' audio='./audio/mp3/4.c.mp3' />
          </Col>
          <Col>
            <PlainCard english='Where should I put them?' phonetic='[juer shud ai put dem]' spanish='¿Dónde las pongo?'
              audio='./audio/mp3/4.d.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Can I take out these weeds?' phonetic='[Can ai teik aut diz widz?]' spanish='¿Puedo sacar estas hierbas?'
              audio='./audio/mp3/4.e.mp3' />
          </Col>
          <Col>
            <PlainCard english='Where should I leave the yard waste?' phonetic='[Uer shud ai liv tha yard uest?]' 
              spanish='¿Dónde puedo dejar la basura del jardín?' audio='./audio/mp3/4.f.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Which trash bin can I use?' phonetic='[Uich trash bin can ai iuz?]' spanish='¿Cuál basurero debo usar?'
              audio='./audio/mp3/4.g.mp3' />
          </Col>
          <Col>
            <PlainCard english='Do you have a compost pile?' phonetic='[du yu hav a campost pail]' spanish='¿Tiene un bote para la basura orgánica?'
              audio='./audio/mp3/4.h.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='How short do you want the grass?' phonetic='[Jao short du yu uant tha gras?]' spanish='¿Qué tan corto quiere el pasto?'
              audio='./audio/mp3/4.i.mp3' />
          </Col>
          <Col>
            <PlainCard english='The lawnmower is broken.' phonetic='[da lan moer es broken]' spanish='El cortacésped/podadora no funciona.'
              audio='./audio/mp3/4.n.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='The weed eater needs gas.' phonetic='[da wid iter nids gas]' spanish='La deshierbadora necesita gasolina.'
              audio='./audio/mp3/4.o.mp3' />
          </Col>
          <Col>
            <PlainCard english='How far apart should I set the plants?' phonetic='[jao far apart shud ay set da plants]' 
              spanish='¿A qué distancia una del otra pongo las plantas?' audio='./audio/mp3/4.j.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Can you mark where to put the plants?' phonetic='[can yu mark juer tu put da plants]' 
              spanish='¿Puede marcar dónde debo poner las plan- tas?' audio='./audio/mp3/4.k.mp3' />
          </Col>
          <Col>
            <PlainCard english='Do you have any extra pots?' phonetic='[du yu hav eni extra pats]' spanish='¿Tiene usted macetas extras?'
              audio='./audio/mp3/4.l.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Do you want me to use fertilizer?' phonetic='[du yu juant mi tu yus fertilaiser]' 
              spanish='¿Quiere que use fertilizante?' audio='./audio/mp3/4.m.mp3' />
          </Col>
          <Col>
            <PlainCard english='Where should I put the tools when I am finished?' phonetic='[juer shud ai put da tuls juen ai am finished]' 
              spanish='¿En donde puedo poner las herramientas cuando termine?' audio='./audio/mp3/4.p.mp3' />
          </Col>
        </Row>

        <a id="GardenerInstructions"><h3>Instructions for the Gardener - <i>Instrucciones para el/la jardinero/a</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='Spread the wood chips.' phonetic='[Spred tha uod chips]' spanish='Esparza las astillas de madera.' 
              audio='./audio/mp3/3.k.mp3' />
          </Col>
          <Col>
            <PlainCard english='Take out these weeds.' phonetic='[Tek aut diz uidz]' spanish='Quite estas hierbas.' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Leave these plants.' phonetic='[Liv diz plants]' spanish='Deje estas plantas.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='Leave the waste here.' phonetic='[Liv tha uest gíer]' spanish='Ponga la basura aquí.' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Move the dirt here.' phonetic='[Muv tha durt gíer]' spanish='Mueva la tierra aquí.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='Dig a trench.' phonetic='[Dig a trench.]' spanish='Escarbe una zanja.' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Rake the soil.' phonetic='[Rek tha soil]' spanish='Rastrille la tierra.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='Water the plants.' phonetic='[juader tha plants]' spanish='Riegue las plantas.' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Till the soil first.' phonetic='[Til tha soil furst]' spanish='Revuelve la tierra primero.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            
          </Col>
        </Row>

        <a id="CommonTasks"><h3>Common Gardening Tasks - <i>Tareas comunes de jardinería</i></h3></a>
        <Row>
          <Col>
            <ImgCard image='./images/dig.pdf' alt='dig' english='Dig' phonetic='[deg]' spanish='escarbar' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/till.pdf' alt='till' english='Till' phonetic='[til]' spanish='labrar' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/rake.pdf' alt='rake' english='Rake' phonetic='[reik]' spanish='rastrillar' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/mow.pdf' alt='mowing' english='Mow the lawn' phonetic='[mo da lan]'
              spanish='recortar el césped/pasto' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/prune.pdf' alt='prune' english='Prune' phonetic='[prun]' spanish='podar/cortar' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/hedge.pdf' alt='trim hedge' english='Trim the hedge' phonetic='[trim tha hedch]'
              spanish='recortar el arbusto' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/deadhead.pdf' alt='dead head' english='Dead head' phonetic='[ded jed]'
              spanish='podar las flores marchitas' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/plant.pdf' alt='plant' english='Plant' phonetic='[plant]' spanish='plantar' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/watering.pdf' alt='water' english='Water' phonetic='[uáder]' spanish='regar' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/transplant.pdf' alt='transplant' english='Transplant' phonetic='[transplant]'
              spanish='trasplantar' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/moving.pdf' alt='move' english='Move' phonetic='[muv]'
              spanish='mover' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/remove.pdf' alt='remove' english='Remove' phonetic='[rimuv]'
              spanish='quitar' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/takeout.pdf' alt='take out' english='Take out' phonetic='[tek aut]'
              spanish='sacar' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/weeding.pdf' alt='weeding' english='Weeding' phonetic='[uidin]' spanish='deshierbar' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/spread.pdf' alt='spread' english='Spread' phonetic='[spred]' spanish='esparcir' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            
          </Col>
        </Row>

        <a id="HealthAndSafety"><h3>Health and Safety - <i>Equipo de seguridad</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='I need ____________ .' phonetic='[ai nid]' spanish='Yo necesito __________.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='I can’t work without __________.' phonetic='I can’t work without .' spanish='No puedo trabajar sin __________.' 
              audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/earplugs.pdf' alt='ear plugs' english='Ear Plugs' phonetic='[ir plogs]' spanish='tapones para los oídos' 
              audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/ear_protection.pdf' alt='ear protection' english='Ear Protection' phonetic='[íer protekchon]' 
              spanish='protección para los oídos' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/boots.pdf' alt='boots' english='Boots' phonetic='[buts]' spanish='botas' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/dust_mask.pdf' alt='dust mask' english='Dust Mask' phonetic='[dost mask]' 
              spanish='máscara para proteger contra el polvo' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/respirator.pdf' alt='respirator' english='Respirator' phonetic='[respereiter]' spanish='respirador' 
              audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/gloves.pdf' alt='gloves' english='Gloves' phonetic='[glovs]' spanish='guantes' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <ImgCard image='./images/goggles.pdf' alt='goggles' english='Goggles' phonetic='[gágelz]' spanish='gafas protectoras' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <ImgCard image='./images/safety_glasses.pdf' alt='safety glasses' english='Safety Glasses' phonetic='[sefti glásez]' 
              spanish='lentes protectores' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>

        <a id="NegotiatingPay"><h3>Negotiating Pay - <i>Negociación de pago</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='I charge $20 an hour.' phonetic='[Ai charch twenti an auer.]' spanish='Cobro $20 la hora.' 
              audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='I charge $19 an hour for weeding.' phonetic='[ai charch nain-tin an auer for widin]' 
              spanish='Cobro $19 la hora por deshierbar.' audio='./audio/mp3/.mp3' /> 
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='I charge $21 an hour for digging.' phonetic='[ai charch twenti juon an auer for deguing]' 
              spanish='Cobro $20 la hora por escarbar.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='I charge $22 an hour for landscaping.' phonetic='[ai charch twenti tu an auer for land skeiping.]' 
              spanish='Cobro $22 la hora por jardineria avanzada.' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='I prefer cash.' phonetic='[ai prefer cash]' spanish='Prefiero efectivo.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='I require a minimum of five hours of work.' phonetic='[ai ricuayer a minimam af faiv auers af wurk]' 
              spanish='Yo requiero un mínimo de cinco horas de trabajo.' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>

        <a id="ClarificationQuestions"><h3>Questions for Clarification - <i>Preguntas para aclarar</i></h3></a>
        <Row>
          <Col>
            <PlainCard english='Excuse me?' phonetic='[Ecskiuz mi?]' spanish='¿Discúlpeme? ¿Perdón?' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='Could you repeat that?' phonetic='[Cud yu ripit that?]' spanish='¿Puede repetir eso?' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='I am confused.' phonetic='[ai em canfyust]' spanish='Estoy confundido/a' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            <PlainCard english='Can you show me?' phonetic='[can yu sho mi]' spanish='¿Puede mostrarme?' audio='./audio/mp3/.mp3' />
          </Col>
        </Row>
        <Row>
          <Col>
            <PlainCard english='Please show me exactly what you want, because I don’t understand.' 
              phonetic='[Plis sho mi eczactli uat yu juant, bicoz ai dont ondorstand.]' 
              spanish='Por favor muéstreme exactamente lo que quiere, porque no entiendo.' audio='./audio/mp3/.mp3' />
          </Col>
          <Col>
            
          </Col>
        </Row>

      </div>

    </div>
  );
}

export default App;
