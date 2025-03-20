const express =require('express');
const mongoose = require('mongoose');

const routes = require('./Routes/index');

const app = express();

const port=5500;


//CORS issue will be solved  // Manual CORS Issue fixing
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();
});


// mongoose.connect('mongodb://127.0.0.1:27017', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB Connected Successfully'))
// .catch(err => console.error('❌ MongoDB Connection Error:', err));

//npm i cors
app.use('/',routes);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});