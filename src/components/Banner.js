import { useState, useEffect, useRef } from "react";
import {Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import headerImg from "../assets/img/profile-img.png";

export const Banner = () => {
    const [displayText, setDisplayText] = useState('Turning Vision into Reality');
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const intervalRef = useRef(null);

    useEffect(() => {
        let iteration = 0;
        const originalText = 'Turning Vision into Reality';
    
        clearInterval(intervalRef.current);
    
        intervalRef.current = setInterval(() => {
          setDisplayText((prevText) => 
            prevText
              .split('')
              .map((letter, index) => {
                if (index < iteration) {
                  return originalText[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              })
              .join('')
          );
    
          if (iteration >= originalText.length) {
            clearInterval(intervalRef.current);
          }
    
          iteration += 1 / 3;
        }, 40);
    
        return () => clearInterval(intervalRef.current);
    }, []);
    const handleMouseOver = () => {
        let iteration = 0;
        const originalText = 'Turning Vision into Reality';
    
        clearInterval(intervalRef.current);
    
        intervalRef.current = setInterval(() => {
          setDisplayText((prevText) => 
            prevText
              .split('')
              .map((letter, index) => {
                if (index < iteration) {
                  return originalText[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              })
              .join('')
          );
    
          if (iteration >= originalText.length) {
            clearInterval(intervalRef.current);
          }
    
          iteration += 1 / 3;
        }, 40);
      };
    

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Frontend Dev", "Competitive Programmer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() *100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
           tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText== ""){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    const [activeLink, setActiveLink] = useState('home');  
    return (
        <section className="banner" id="home">
            <Container> 
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                      <span onMouseOver={handleMouseOver} data-value="Turning Vision into Reality" className="tagline">{displayText}</span>
                      <h1>{"Hi I'm Krish, "}<span className="wrap">{text}</span></h1>
                      <p>A dedicated 3rd-year student at TIET, Punjab, specializing in frontend development.Passionate about crafting intuitive interfaces and leveraging cutting-edge technologies like React, I'm eager to contribute to impactful projects that innovate and enhance user engagement.</p>
                      <a href="#connect" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><button>Let's Connect <ArrowRightCircleFill size={25} /></button></a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 