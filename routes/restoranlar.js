const { Router } = require("express");
const express=require("express");
const restoranlarController=require("../controllers/restoranlar");
const router=Router();


router.get("/",restoranlarController.getAllRestoranlar);
router.get("/:id",restoranlarController.getRestoranById);
// router.post("/",restoranlarController.createRestoran);
// router.put("/:id",restoranlarController.updateRestoranById);
// router.delete("/:id",restoranlarController.deleteRestoranById);


module.exports=router