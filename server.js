const axios = require('axios');
const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 80;


// Home page
router.get('/',function(request,response){
  response.sendFile(path.join(__dirname+'/index.html'));
  });

//about page to return HTML file
router.get('/about', (request, response) => {
  response.send(`Welcome to Vole! This is a simple test application written in Node.`);
})

//test 1 to return user agent of requestor
router.get('/test1', (request, response) => {
  const agent = request.headers["user-agent"];
  response.send(`
  <html><br/><p>Your user agent is:</p><p>${agent}</p></html>`);
})

//test 2
router.post('/test2',(request,response) => {
  console.log(request.body);

  axios.get(request.body.apiurl).then(resp => {
    const result = JSON.stringify(resp.data);
    response.send(`
    <html><br/><p>Calling API: [${request.body.apiurl}]</p><p>Result:</p><p>${result}</p></html>`);
  })
  .catch(error => {
    console.log(error);
    response.send(`${error}. Please check console log.`);
  });
})

app.use("/", router);

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
