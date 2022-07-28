const mongoose = require('mongoose');
const app = require('./app');
//------------------------------------------------>

//connection to database------------------------------------------->
const uri = "mongodb+srv://webflowofficial:FadbwxWkHH2LZ2Xw@cluster0.xj4r6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true
}).then(() => {
    console.log("connection to database eshtablished");
}).catch(err => {
    console.log(err);
})

//server listening------------------------------------------------->
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})