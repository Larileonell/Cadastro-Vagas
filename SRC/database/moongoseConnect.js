const DATABASE_ = process.env.DATABASE; 
const mongoose=  require("mongoose"); 
 
  
 const connect = async () => { 

   try{ 
     mongoose.connect(DATABASE_, { 
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