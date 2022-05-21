const axios = require('axios');
const express = require('express')
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const port = process.env.PORT || 80;


// Home page
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
})


//about page to return HTML file
app.get('/about', (request, response) => {
    response.send(`Welcome to Vole! This is a simple test application written in Node.`);
})

//test 1 to return user agent of requestor
app.get('/test1', (request, response) => {
  const agent = request.headers["user-agent"];
  response.send(`
  <html><br/><p>Your user agent is:</p><p>${agent}</p></html>`);
})

//test 2 to call API
const api = 'https://httpbin.org/ip';
app.get('/test2', (request, response) => {
  axios.get(api).then(resp => {
    console.log(resp.data);
    const result = JSON.stringify(resp.data);
    response.send(`
    <html><br/><p>Calling API: [${api}]</p><p>Result:</p><p>${result}</p></html>`);
  })
  .catch(error => {
    console.log(error);
    response.send(`${error}. Please check console log.`);
  });
})


app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
