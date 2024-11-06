const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const cors = require('cors')

//routes 
const userRoutes = require('./routes/user/user_routes.js')

const app = express();

const port = process.env.PORT || 3030;

//app use middlewares
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));
  

//routes 

app.use('/user', userRoutes);
app.use('/', (req, res) =>{
    res.send('Test Route Running!')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});