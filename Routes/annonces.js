const express = require("express");
const router = express.Router();
const {
  createAnnonce,
  getAllAnnonces,
  deleteAnnonce,
  
} = require("../Controllers/annonceController");
const auth = require("../Middleware/auth");


router.post("/create", auth, createAnnonce);       
router.get("/getAllAnnonces", getAllAnnonces);             
router.delete("/delete/:id", auth, deleteAnnonce);   

module.exports = router;

