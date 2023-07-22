import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import apple from "../assets/img/apple.png";
import covid from "../assets/img/covid.png";
import email from "../assets/img/email.jpeg";
import country from "../assets/img/country.png";
import portfolio from "../assets/img/portfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import tic from "../assets/img/tic-tac-toe.png";
import iitj from "../assets/img/iitj-bazaar.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "IITJ Bazaar",
      description: "Full Stack Web App\n(Working on UI)",
      imgUrl: iitj,
    },
    {
      title: "COVID-19 Prediction",
      description: "ML Project",
      imgUrl: covid,
      githubLink: "https://github.com/kashvi0/COVID-19-Detection",
    },
    {
      title: "Gmail Summarizer",
      description: "Dev-OpenAI Project\n(Published Only for Test Users)",
      imgUrl: email,
    },
  ];
    const projects2 = [
    {
      title: "Tensorflow Object Detection",
      description: "ML Project",
      imgUrl: apple,
      githubLink: "https://github.com/kashvi0/Tensorflow-Object-Detection",
    },
    {
      title: "Unsupervised Learning on Country Data",
      description: "ML Project",
      imgUrl: country,
      githubLink: "https://github.com/kashvi0/Unsupervised-Learning-on-Country-Data",
    },
    {
      title: "Portfolio Website",
      description: "WebD Project",
      imgUrl: portfolio,
    },
  ];
    const projects3 = [
      {
        title: "Tic-Tac-Toe",
        description: "WebD Project",
        imgUrl: tic,
        githubLink: "https://github.com/kashvi0/TicTacToe",
      },
    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Curated collection of projects that I've passionately worked on. Each project represents a unique journey, where I've combined my skills, and problem-solving abilities to bring ideas to life. I've poured my dedication into crafting solutions that not only meet objectives but also push the boundaries of innovation.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
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
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
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
