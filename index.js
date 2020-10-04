const express = require('express');

const { readFile, readFileSync } = require('fs').promises;

const app = express();

app.use(express.static(__dirname + '/src'));

app.get('/', async (request, response) => {
  response.send(await readFile('./src/home.html', 'utf8'));
});

app.get('/projects/midas', async (request, response) => {
  response.send(await readFile('./src/projects/MIDAS/midas.html', 'utf8'));
});

app.get('/test', async (request, response) => {
  response.send(await readFile('./src/loading.html', 'utf8'));
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));