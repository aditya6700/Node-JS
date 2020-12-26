const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/BackendMERN",{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(() => {
        console.log("connection succesfull");
})
.catch((err) => {
    console.log(`connection failed ${err}`);
});