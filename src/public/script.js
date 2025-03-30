const socket = io();
const peer = new Peer();  // Création d’un PeerJS ID automatique
let myStream;
let peers = {};

peer.on('open', (id) => {
    console.log("Mon Peer ID :", id);
});

function createRoom() {
    let roomId = peer.id;  // Utilise l’ID PeerJS comme identifiant de salle
    document.getElementById("roomId").value = roomId;
    joinRoom();
}

function joinRoom() {
    let roomId = document.getElementById("roomId").value;
    if (!roomId) {
        alert("Veuillez entrer un ID de salle !");
        return;
    }

    socket.emit('joinRoom', roomId);

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        myStream = stream;

        socket.on('newUser', (userId) => {
            console.log("Nouvel utilisateur :", userId);
            connectToNewUser(userId, stream);
        });

        peer.on('call', (call) => {
            call.answer(stream);
            call.on('stream', (userStream) => {
                addUserToList(call.peer);
            });
        });

    }).catch((err) => console.error('Erreur microphone :', err));
}

function connectToNewUser(userId, stream) {
    const call = peer.call(userId, stream);
    call.on('stream', (userStream) => {
        addUserToList(userId);
    });
    peers[userId] = call;
}

function addUserToList(userId) {
    let userList = document.getElementById("userList");
    let listItem = document.createElement("li");
    listItem.textContent = `Utilisateur : ${userId}`;
    userList.appendChild(listItem);
}

socket.on('userDisconnected', (userId) => {
    console.log(`Utilisateur ${userId} déconnecté`);
    if (peers[userId]) peers[userId].close();
});
