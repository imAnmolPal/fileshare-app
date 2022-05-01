require('dotenv').config();

const mongoose = require('mongoose');

// function connectDB() {
//     // Database connection 🥳
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
//     const connection = mongoose.connection;
//     connection.once('open', () => {
//         console.log('Database connected 🥳🥳🥳🥳');
//     }).catch(err => {
//         console.log('Connection failed ☹️☹️☹️☹️');
//     });
// }

function connectDB() {
    // Database connection 🥳
    mongoose
      .connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        //   useCreateIndex: true,
        useUnifiedTopology: true,
        //   useFindAndModify: true,
      })
      .then((con) => {
        console.log("database connection success🥳");
      })
      .catch((err) => {
        console.log("database connection failure");
        console.log(err);
      });
  }
  

module.exports = connectDB;