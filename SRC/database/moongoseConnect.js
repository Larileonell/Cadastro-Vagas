const DATABASE_URL = process.env.DATABASE_URL; 
  
 const mongoose=  require("mongoose"); 
  
 const connect = async () => { 
    try{ 
     mongoose.connect(DATABASE_URL, { 
     useNewUrlParser: true, 
    useUnifiedTopology: true, 
 }); 
   console.log("Database connected"); 
  } catch (error) { 
   console.log(error); 
  } 
 }; 
  
 module.exports = { 
  connect, 
 };