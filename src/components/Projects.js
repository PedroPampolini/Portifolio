import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import purgatumLogo from "../assets/img/purgatum-logo.jpg";
import papoLogo from "../assets/img/papo-logo.jpg";
import moveLogo from "../assets/img/move-logo.png";
import videosciijotaro from "../assets/img/videosciijotaro.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Purgatum",
      description: "Jogo feito em equipe desenvolvido na Unity.",
      imgUrl: purgatumLogo,
      projectUrl:"https://github.com/Bois-Barganhados-Studio/Purgatum-game"
    },
    {
      title: "VideosCII",
      description: "Converte um video inteiro em caracteres ASCII",
      imgUrl: videosciijotaro,
      projectUrl:"https://github.com/PedroPampolini/Videoscii"
    },
    {
      title: "PAPO",
      description: "Uma plataforma de busca de aulas particulares",
      imgUrl: papoLogo,
      projectUrl:"https://github.com/PedroPampolini/PUC/tree/main/TI2/PAPO.Completo"
    },
    {
      title: "Solicitador de paradas do MOVE",
      description: "Um dispositivo que solicitava paradas do MOVE em cabines de ônibus",
      imgUrl: moveLogo,
      projectUrl:"https://www.conferencias.cefetmg.br/index.php/28META/28META/paper/view/4455"
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Estes são alguns dos principais projetos desenvolvidos, clique no nome de cada um para saber mais.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Principais Projetos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Janela 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Janela 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Ainda nada no item 2.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Ainda nada no item 3.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
