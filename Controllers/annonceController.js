const Annonce = require("../Models/Annonce");

const createAnnonce = async (req, res) => {
  try {
    const annonces = new Annonce({
      ...req.body,
      author: req.user._id, // utilisateur connecté
    });
    await annonces.save();
    res.status(201).send(annonces);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getAllAnnonces = async (req, res) => {
  try {
    const annonces = await Annonce.find().populate("author", "username");
    res.status(200).send(annonces);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteAnnonce = async (req, res) => {
  try {
    const annonces = await Annonce.findByIdAndDelete(req.params.id);
    if (!annonces) {
      return res.status(404).send({ error: "Annonce introuvable" });
    }
    res.status(200).send(annonces);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};


module.exports = {
  createAnnonce,
  getAllAnnonces,
  deleteAnnonce,
 
};
