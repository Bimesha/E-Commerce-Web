// controllers/contactController.js
const nodemailer = require('nodemailer');
const { validationResult } = require('express-validator');
const dns = require('dns');

const sendContactMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { contactEmail, contactMessage } = req.body;

  // 1. Extract domain from the contactEmail
  const emailDomain = contactEmail.split('@')[1];

  // 2. Validate the email domain using DNS MX records
  dns.resolveMx(emailDomain, async (err, addresses) => {
    if (err || addresses.length === 0) {
      return res.status(400).json({ message: "Invalid email domain" });
    }

    // 3. Proceed with sending the email if the domain is valid
  try {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables for sensitive data
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define the email options
    const mailOptions = {
      from: contactEmail,
      to: 'Oaklyweb@gmail.com',
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${contactEmail}: \n\n${contactMessage}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error while sending email:', error);
    res.status(500).json({ error: 'Failed to send email: ${error.message}' });
  }
});
};


module.exports = { 
  sendContactMessage 
};