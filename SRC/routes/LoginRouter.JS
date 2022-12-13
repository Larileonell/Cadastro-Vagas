const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controller/ControllerLogin")
router.post("/:id", controller.login)
router.get("/:nome", controller.nomeLogin)
router.post("/add", controller.novoLogin )
router.delete("/:email", controller.cadastroExcluido)



module.exports = router