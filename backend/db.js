const mongoose = require('mongoose');
const mongoURI =
  "mongodb://localhost:27017/inotebook?directConnection=true&tls=false&readPreference=primary&appname=MongoDB%20Compass&ssl=false";
  const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};
  
 module.exports = connectToMongo;