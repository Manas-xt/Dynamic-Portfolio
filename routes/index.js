const express = require('express');
const router = express.Router();
const path = require('path');
const Contact = require('../models/contact');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/contact.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about_me.html'));
  });

  router.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/projects.html'));
  });

router.post('/submit-contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Error submitting contact form' });
  }
});

module.exports = router;