import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contactMe.json";
import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send');

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const serviceId = 'service_gy2zlte';
    const templateId = 'template_n0ez3gc';
    const publicKey = 'M_JjGg9URrkwoKqpS';

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      from_phoneNo: phoneNo,
      to_name: 'Krish',
      message: message,
    };

    // Log templateParams to debug
    console.log('templateParams:', templateParams);

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNo('');
        setMessage('');
        setButtonText('Send');
      })
      .catch((error) => {
        console.error('Error while sending email', error);
      });
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
          <Lottie animationData={contactImg} loop={true} />
          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Let's get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value) } required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value) } required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      placeholder="Phone No."
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)} required
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)} required
                    ></textarea>
                    <button type="submit"><span>{buttonText}</span></button>
                    <div className="contact_icons">
                        <span className="reachMe">You can also reach me on: </span>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://www.linkedin.com/in/krish-kumar-0363212b7/"><img src={navIcon1} alt="linkedIn" /></a>
                                <a href="https://github.com/Krish2728"><img src={navIcon2} alt="github" /></a>
                                <a href="https://www.instagram.com/kr.ish4543/"><img src={navIcon3} alt="instagram" /></a>
                            </div>
                        </span>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
