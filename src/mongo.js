const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/twilio',{
useNewUrlParser:true,
useUnifiedTopology:true,
})
.then(db => console.log('Db connected'))
.catch(err => console.log(err))