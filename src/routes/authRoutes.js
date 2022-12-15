const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controller/ControllerAuth")

router.post("/:email", controller.login)
router.get("/:nome", controller.nomeLogin)
router.post("/", controller.novoLogin )
router.delete("/:id", controller.cadastroExcluido)
router.patch("/:id", controller.atualizaLogin)



module.exports = router