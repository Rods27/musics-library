const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log( `Listening on port ${port}`);
});

function getMyFile(url) {
  return new Promise ((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data)
          resolve(parsedData)
        } catch (error) {
          reject(error.message)
        }
      });
    })
  })
}

app.get('/', (req, res) => {
  const { url } = req.headers;
  getMyFile(url).then(response => {
    res.status(200).json(response)
  })
});