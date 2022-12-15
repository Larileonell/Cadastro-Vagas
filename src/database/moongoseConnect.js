const DATABASE = process.env.DATABASE; 
const mongoose=  require("mongoose"); 
mongoose.set('strictQuery', true)
  
 const connect = async () => { 

   try{ 
     mongoose.connect(DATABASE, { 
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