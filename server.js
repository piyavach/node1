const express = require('express');
const { helloworld } = require('./Utils');
// Constants
const PORT = 3000;
const HOST = 'localhost';
const url = 'https://jsonplaceholder.typicode.com/todos/1'


// App
const app = express();
app.get('/', async (req, res) => {
  // res.send('Hello World '+ JSON.stringify( await doFetch(url)));
  // res.send(y_parabola(5));
  if(helloworld() == "helloword")
  {
    console.log(0);
  }else{
    
    console.log(1);
  }
  // res.send("hello")
});
 