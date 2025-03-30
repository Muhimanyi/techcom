const express = require('express');
const fs = require('fs');
const https = require('https');
const socketIo = require('socket.io');
// const { v4: uuidv4 } = require('uuid');
const app = express();

const options = {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem")
};

const server = https.createServer(options, app);

const io = socketIo(server);
app.use(express.static('src/public'));

// Liste des utilisateurs connectés
const users = {};

io.on('connection', (socket) => {
    console.log(`Nouvel utilisateur connecté : ${socket.id}`);
    users[socket.id] = socket.id; // Ajouter l'utilisateur à la liste

    // Informer les autres utilisateurs qu'un nouvel utilisateur s'est connecté
    socket.broadcast.emit('user-connected', socket.id);

    // Envoyer l'ID de connexion au client
    socket.emit('connectedToServer', socket.id);

    // Gestion des offres (offer)
    socket.on('offer', (data) => {
        const { userId, offer } = JSON.parse(data);
        console.log(`Offre reçue de ${socket.id} pour ${userId}`);
        if (users[userId]) {
            io.to(userId).emit('offer', JSON.stringify({ userId: socket.id, offer }));
        }
    });

    // Gestion des réponses (answer)
    socket.on('answer', (data) => {
        const { userId, answer } = JSON.parse(data);
        console.log(`Réponse reçue de ${socket.id} pour ${userId}`);
        if (users[userId]) {
            io.to(userId).emit('answer', JSON.stringify({ userId: socket.id, answer }));
        }
    });

    // Gestion de la déconnexion
    socket.on('disconnect', () => {
        console.log(`Utilisateur déconnecté : ${socket.id}`);
        delete users[socket.id]; // Supprimer l'utilisateur de la liste
        socket.broadcast.emit('user-disconnected', socket.id); // Informer les autres utilisateurs
    });
});

server.listen(3000, () => {
    console.log('Serveur en ligne sur le port 3000');
});
