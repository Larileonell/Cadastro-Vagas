const cadastro = require("../models/cadastro");

//POST
const cadastroVagas = async (req, res) => {
  try {
  const {  DescriçãoVaga, plataforma, remuneracao, requisitos, atribuicoes, Habilidades, habilidadesDesejaveis,
    vagaRemota, beneficios,  nomeDavaga } = req.body;
    const findEmail = await cadastro.findOne({nomeDavaga});
    
        if (findEmail) {
          return res.status(404).json({ message: "Vaga já Cadastrada" });
        };
    
        const novoCadastro = new cadastro({
          DescriçãoVaga, plataforma, remuneracao, requisitos, atribuicoes, Habilidades, habilidadesDesejaveis,
    vagaRemota, beneficios,  nomeDavaga
          
        });
        const savedcadastro = await novoCadastro.save();
        res.status(201).json({ message: " cadastrada com sucesso!", savedcadastro });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
      };

  
}
//patch
const atualizaVaga = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      DescriçãoVaga, 
      plataforma,
       remuneracao, 
       requisitos, 
       atribuicoes, 
       Habilidades, 
       habilidadesDesejaveis,
      vagaRemota,
       beneficios
     
    } = req.body;
    const buscaVaga = await cadastro.findById(id);
    if (buscaVaga == null) {
      res.status(404).json({ message: "vaga não definida" });
    };

    if (id) {
      const buscaVaga = await cadastro.findById(consoleId);

      if (findConsole == null) {
        return res.status(404).json({ message: "vaga não encontrada" });
      };
    };
    buscaVaga.DescriçãoVaga = DescriçãoVaga || buscaVaga.DescriçãoVaga;
    buscaVaga.plataforma = plataforma|| buscaVaga.plataforma;
    buscaVaga.remuneracao = remuneracao|| buscaVaga.remuneracao;
    buscaVaga.requisitos = requisitos|| buscaVaga.requisitos;
    buscaVaga.atribuicoes =atribuicoes || buscaVaga.atribuicoes;
    buscaVaga.Habilidades = Habilidades || buscaVaga.Habilidades;
    buscaVaga.habilidadesDesejaveis = habilidadesDesejaveis|| buscaVaga.habilidadesDesejaveis;
    buscaVaga.vagaRemota = vagaRemota || buscaVaga.vagaRemota;
    buscaVaga.beneficios = beneficios || buscaVaga.beneficios;
    const updateVaga = await buscaVaga.save();
    res.status(200).json({ message: "Vaga atualizada", updateVaga });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};

//GET
const findAllVagas = async (req, res) => {
    try {
      const allVagas = await cadastro.find().populate("nome");
      res.status(200).json(allGames);
    } catch {
      res.status(500).json({ message: Error.message });
    };
  };
  const findVagasId = async (req, res) => {
    try {
      const findVaga = await cadastro.findById(req.params.id).populate(
        "vaga"
      );
      if (findVaga == null) {
        res.status(404).json({ message: "Vaga não encontrada" });
      }
      res.status(200).json(findVaga);
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };
//delete
const deleteVaga = async (req, res) => {
  try {
    const { id } = req.params;
    const vagas = await cadastro.findById(id);

    if (vagas == null) {
      return res.status(404).json({ message: `Vaga com id de: ${id} não foi encontrada` })
    };
    await vagas.remove();
    res.status(200).json({ message: `A Vaga foi excluída  ${id} pois já foi preenchida` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  };
};
module.exports ={
    cadastroVagas,
    findAllVagas, 
    findVagasId,
    deleteVaga,
    atualizaVaga
}