const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware pour servir les fichiers statiques (ton front-end)
app.use(express.static(path.join(__dirname, 'public')));

// Route par défaut (page d'accueil)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour la page "Skills"
app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'skills.html'));
});

// Route pour la page "Projects"
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
});

// Route pour la page "Certifications"
app.get('/certifications', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'certifications.html'));
});

// Lancer le serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

