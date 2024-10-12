const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Middleware para parsear el cuerpo como texto
app.use(bodyParser.text());

// archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para manejar las solicitudes de análisis
app.post('/analyze', (req, res) => {
    console.log("Solicitud recibida con los siguientes datos:", req.body); 
    exec(`echo "${req.body}" | /Users/haroldmarrero/Desktop/Analizador\\ Lex/Analizador-Lex/lexical_analyzer`, (error, stdout, stderr) => {
        if (error) {
            console.error("Error ejecutando el analizador:", error); // Para depurar
            return res.status(500).send(stderr);
        }
        console.log("Salida del analizador léxico:", stdout);
        res.send(stdout);
    });
});

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});

