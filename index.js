const { response } = require('express');
const express = require('express');

const { readFile, readFileSync } = require('fs').promises;

const app = express();
console.log(__dirname);
app.use(express.static(__dirname + '/src'));

app.get('/', async (request, response) => {
  response.send(await readFile('./src/home.html', 'utf8'));
});

app.get('/projects/midas', async (request, response) => {
  response.send(await readFile('./src/projects/MIDAS/midas.html', 'utf8'));
});

app.get('/projects/RoboticsAcademy', async (request, response) => {
  response.send(await readFile('./src/projects/RB/rb.html', 'utf8'));
});

app.get('/resume', async (request, response) => {
  var data = readFile('./src/resume/Manuel_Toledo_Resume.pdf', 'utf8');
  response.contentType("application/pdf");
  response.send(data);
  // https://stackoverflow.com/questions/31105846/how-to-send-a-pdf-file-from-node-express-app-to-the-browser/31106110
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));