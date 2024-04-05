const mongoose = require('mongoose')
const uri = "mongodb+srv://hstech025:k4BRNuEmGgKZ1KLt@cluster0.nd8bmtl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`Db connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error}`);
  }
 
}

module.exports = connectDB;

