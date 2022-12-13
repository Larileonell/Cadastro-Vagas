const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controller/ControllerLogin")
router.post("/newuser", controller.create)



module.exports = router