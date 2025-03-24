const express =require('express');
const mongoose = require('mongoose');

const routes = require('./Routes/index');

const app = express();


require('dotenv').config();


//CORS issue will be solved  // Manual CORS Issue fixing
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Header','Content-Type, Authorization');
    next();
});


const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5500;

if (!mongoURI) {
    console.error("❌ Error: MONGO_URI is undefined. Check your .env file.");
    process.exit(1); // Stop the server if the URI is missing
  }
  
  mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected successfully"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// mongoose.connect('mongodb://127.0.0.1:27017/local', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => console.log('✅ MongoDB Connected Successfully'))
// .catch(err => console.error('❌ MongoDB Connection Error:', err));



//npm i cors
app.use('/',routes);

