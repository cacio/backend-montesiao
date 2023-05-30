import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as http from 'http';
import * as socketio from 'socket.io';
process.env.TZ = 'America/Sao_Paulo';
import 'express-async-errors';
import './database/connection';

import routes  from './routes';

import errorHandler from './errors/handler';
dotenv.config();
const app = express();

const server = http.createServer(app);
const io = new socketio.Server(server,{
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true
    }
  });

app.set('socketio', io);
app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errorHandler);


server.listen(process.env.PORT || 3333,()=>{
    console.log('Server is running 🚀')
});