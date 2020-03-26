const express = require('express');
const crypto = require('crypto');

const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes =  express.Router();

// Session routes
routes.post('/session', SessionController.create)

// Ong routes
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

// Incident routes
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/delete/:id', IncidentController.delete);

// Profile routes
routes.get('/profile', ProfileController.index);

module.exports = routes;