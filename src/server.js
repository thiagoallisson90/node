// const http = require('http');
import http from 'node:http';
import { json } from './middlewares/json.js';
import { Database } from './database.js';

const database = new Database();

const server = http.createServer(async (req, res) => {
  const { method, url } =  req;
  
  await json(req, res);

  if(method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(users));
  }

  if(method === 'POST' && url === '/users') {
    const { name, email } = req.body;
    users.push({
      id: 1,
      name,
      email
    });

    return res.writeHead(201).end();
  }

  res.writeHead(404).end();
});

server.listen(3333);