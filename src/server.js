// const http = require('http');
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.end('Server on fire!');
});

server.listen(3333);