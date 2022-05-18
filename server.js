const express = require('express')
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const port = process.env.PORT || 8888;


// Home page
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
})


//about page to return HTML file
app.get('/about', (request, response) => {
    response.send(`Welcome to Vole! The design here.`);
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
