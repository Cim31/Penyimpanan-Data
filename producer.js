const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    ws.send('Notifikasi baru: Sistem berjalan dengan baik!');
    console.log('Notifikasi dikirim.');
});
