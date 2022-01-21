var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var app = express();
const config = require('config')
//DB Connection 
const connectDB = require('./config/db'); 
//Connect Database
connectDB();
//routes
const routes = require('./src/api/routes/v1')
//cors
app.use(cors({
	origin: ['http://localhost:3000' , 'http://localhost:3001' , 'http://localhost:3002' ],
	credentials:true,
	exposedHeaders: ["set-cookie"]
}));
app.options('*', cors());

//Middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
//use Routes
app.use('/v1' , routes)

app.listen(8000, function() {
    console.log('App running on port 8000');
});
  