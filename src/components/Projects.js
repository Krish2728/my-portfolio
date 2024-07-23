import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

    const projects = [
        {
            title: "Simon Sequence Showdown",
            description: "Classic Sequence Game",
            imgUrl: projImg1,
            url: "https://github.com/Krish2728/Simon-Game",
        },
        {
            title: "An E-Commerce Website",
            description: "Multilingual Shopping Hub",
            imgUrl: projImg2,
            url: "https://github.com/Krish2728/E-commerce-web-for-indiam-msmes",
        },
        {
            title: "Potfolio",
            description: "Interactive Design Showcase",
            imgUrl: projImg3,
            url: "https://github.com/Krish2728/my-portfolio",
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                  <Col>
                    <h2>Projects</h2>
                    <p>Explore my latest creations—from interactive web apps to responsive design showcases—all crafted with passion and precision.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey ="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                  <Tab.Content>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                  </Col>  
                </Row>
            </Container>
        </section>
    )
}