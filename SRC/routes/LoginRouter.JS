const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controller/ControllerLogin")

router.post("/add", controller.login)
router.get("/:nome", controller.nomeLogin)
router.post("/", controller.novoLogin )
router.delete("/:id", controller.cadastroExcluido)



module.exports = router