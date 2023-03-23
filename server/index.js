const express = require('express')
cons path = require('path')
const products = require('./controllers/products')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app
  .get('/', (req, res) => {
    res.send('Hello World From Express')
})

.use('/products', products)

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
