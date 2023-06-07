const express =require("express");
const router=express.Router();
const restoRoutes=require("./restoranlar");

router.use("/restoranlar",restoRoutes);


module.exports=router;
