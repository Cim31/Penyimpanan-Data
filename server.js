const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Klien terhubung.');

    ws.on('message', (message) => {
        console.log('Pesan diterima:', message);
    });

    ws.send('Selamat datang di sistem notifikasi!');
});

console.log('WebSocket Server berjalan di ws://localhost:8080');
