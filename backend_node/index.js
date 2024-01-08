const express = require('express')
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost:27017/mongodb_test')
    .then(()=>console.log('Database connection successful'))
    .catch(err => console.log(err));



app.use('/account', require('./routes/accountRoutes'));


const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  });
