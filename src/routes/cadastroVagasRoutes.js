const express =  require("express") 
const router =  express.Router(); 
const controller = require("../controller/CadastroVagas")

router.post("/cadastro", controller.cadastroVagas)
router.get("/all", controller.findAllVagas)
router.get("/:nome", controller.findVagasNome)
router.delete("/:id", controller.deleteVaga)
router.patch("/:id", controller.atualizaVaga)

module.exports = router