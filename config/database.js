const mongoose = require("mongoose");


const connectDatabse = () => {
    mongoose.connect("mongodb+srv://sahil:pgroomsvone@cluster0.hwpouvw.mongodb.net/?retryWrites=true&w=majority",{
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