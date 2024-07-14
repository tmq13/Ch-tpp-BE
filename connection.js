const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://trinhminhquang2002:123123123@chatapp.9fjs1gg.mongodb.net/`, ()=> {
  console.log('connected to mongodb')
})
