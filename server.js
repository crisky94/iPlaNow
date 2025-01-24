import next from 'next';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;
const app = next({ dev, port });
const handler = app.getRequestHandler();

// Preparamos la aplicación Next.js
app.prepare().then(() => {
    // Creamos el servidor HTTP
    const httpServer = createServer(handler);

    // Inicializamos el servidor de Socket.io
    const io = new SocketServer(httpServer, {
        cors: {
            origin: '*', // Permite todas las conexiones
            methods: ['GET', 'POST', 'DELETE', 'PUT'],
        },
    });

    // Asignamos la instancia de io a un objeto global para que esté accesible en la API
    global.io = io;

    // Escuchamos cuando un cliente se conecta vía WebSocket
    io.on('connection', (socket) => {
        console.log(`Cliente conectado con id: ${socket.id}`);

        socket.on('disconnect', () => {
            console.log('Cliente desconectado');
        });
    });

    // Inicia el servidor HTTP
    httpServer.listen(port, (err) => {
        if (err) throw err;
        console.log(`Servidor escuchando en http://localhost:${port}`);
    });
});
