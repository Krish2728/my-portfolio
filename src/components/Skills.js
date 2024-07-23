import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Graphic Designer</h5>
                            </div>
                        </Carousel>
                        <h3>Other Skills :-</h3>
                        <ul>
                          <div className="other-skills">
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>GitHub</li>
                            <li>Canva</li>
                            <li>Python</li>
                            <li>Html/CSS</li>
                            <li>SQL</li>
                          </div>
                        </ul>
                        <h3 style={{marginTop: "20px"}}>Data Structures and Algorithms</h3>
                        <p style={{textAlign: "left", marginLeft: "19px"}}>LeetCode Profile: 
                          <a style={{textDecoration:"none"}} href="https://leetcode.com/krishkumaar/" target="_blank" rel="noopener noreferrer">Krish Kumaar</a> 
                          – Solved over 200 problems, honing skills in core data structures and algorithms.</p>
                  </div>
                </div>
            </div>
        </div>

    </section>
  )
}
