const cadastro = require("../models/cadastro");
const { default: mongoose } = require("mongoose");
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
    const buscaVagas = await cadastro.findById(id);
    if (buscaVagas == null) {
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
  //get
  const findVagasNome =  (req, res) => {
    const { nomeDavaga } = req.params;

    cadastro.find({nomeDavaga: nomeDavaga })
        .then((nomeDavaga) => {
            res.status(200).json(nomeDavaga);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
  };
//delete
const deleteVaga = (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Id inválido" });
    return;
  }

  cadastro.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json("cadastro excluido!");
    })
    .catch((err) => {
      throw new Error(err);
    });

};
module.exports ={
    cadastroVagas,
    findAllVagas, 
    findVagasNome,
    deleteVaga,
    atualizaVaga
}