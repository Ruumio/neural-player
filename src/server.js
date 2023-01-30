
import express from 'express';
import http from "http";
import { Server } from "socket.io";
import { handler } from './build/handler.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
global.io = io;


// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
  res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

server.listen(3000, () => {
  console.log('listening on port 3000');
});
