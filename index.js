const app = require("./app");
require("dotenv").config();
const cloudinary = require("cloudinary");
const PORT = process.env.PORT || 7900 ;
const connectDB = require("./config/database")


//Databse COnnection
connectDB();

app.listen(PORT , () =>{
    console.log(`Server is running on port ${PORT}`);
});