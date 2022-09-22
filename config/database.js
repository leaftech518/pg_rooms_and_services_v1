const mongoose = require("mongoose");


const connectDatabse = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(console.log("Database connected"))
    .catch( error => {
        console.log("Connection Problem");
        console.log(error);
        process.exit(1);
      });
};

module.exports = connectDatabse;