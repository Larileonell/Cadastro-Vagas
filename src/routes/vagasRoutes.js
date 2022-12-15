const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controller/controllersVagas")

router.post("/", controller.cadastroVagas)
router.get("/", controller.findAllVagas)
router.get("/:nome", controller.findVagasNome)
router.delete("/:id", controller.deleteVaga)
router.patch("/:id", controller.atualizaVaga)

module.exports = router