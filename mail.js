const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
var email;
app.post('/example', (req, res) => {
  email=req.body.email;
  let transport = nodemailer.createTransport({
    service: 'gmail',
  auth: {
      user: 'vedkotpalliwar@gmail.com',
      pass: 'password'
  }
  });

  const message = {
      from: 'vedkotpalliwar@gmail.com', // Sender address
      to: email,         // List of recipients
      subject: 'hi', // Subject line
      text: 'yolo' // Plain text body
  };
  transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
  });
  res.send(email);
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
