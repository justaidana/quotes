const express = require ("express"); 
const app = new express();
app.use(express.static('static')).listen(5000, () => console.log('Server listens to 5000')); 