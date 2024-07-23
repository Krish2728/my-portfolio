const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Server Running on port 3000"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'krishkumaar2703@gmail.com',
    pass: 'ankpwjrlfxkfdkgw',
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "krishkumaar2703@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Catch all other routes and return a JSON error response
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});
