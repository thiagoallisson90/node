const express = require('express') // module CommomJS
//import express from 'express'; // module ES

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    'msg': 'Hello World!!!!'
  });
});

app.listen(3333, () => {
  console.log('Running...');
});