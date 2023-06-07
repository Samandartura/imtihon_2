const db = require("../config/db");

//get All Restoranlar
exports.getAllRestoranlar = (req,res)=>{
  db.query("SELECT * FROM restoranlar",(error,results)=>{
    if(error){
      console.log("Xato restoranlar topilmadi",error);
      return res.status(500).join({error:"Serverga bog'lanishda xatolig"});
    }
    res.json(results);  
  });
};


//getRestoranById
exports.getRestoranById=(req,res)=>{
  const restoranid=req.params.id;
  db.query("SELECT * FROM restoranlar WHERE id=?",[restoranid],(error,results)=>{
    if(error){
      console.log("Xatolig",error);
      return res.status(500).json({error: "Serverda xatolig"});
    }
    if(results.length === 0){
      return res.status(404).json({error: "Restoran topilmadi"})
    }
    res.json(results[0]);
  });
};


//Create New Restoran
exports.createNewRestoran=(req,res)=>{
  const {name,adress}=req.body;
  db.query(
    "INSERT INTO restoranlar(name,adress) VALUES(?,?)",[name,adress],(error,results)=>{
      if(error){
        console.log("Yangi restoran yaratishda xatolig: ",error);
        return res.status(500).json({error: "Xato yangi restoran yaratilmadi"});
      };
      console.log(results);
      res.json({
        message: "Restoran yaratildi",
        restoranid:results.insertId,
      });
    }
  )
};



//update RestoranById
exports.updateRestoranById=(req,res)=>{
  const restoranid=req.params.id;
  const {name,adress}=req.body;
  db.query(
    "UPDATE orders set name=?,adress=? where id=?",[name,adress,restoranid],(error,results)=>{
      if(error){
        console.log("Xatolig: ",error);
        return res.status(500).json({error: "Xatolig "});
      };
      console.log(results);
      res.json({
        message: "Restoran yangilandi",
      });
    }
  )
};


//delete RestoranById
exports.deleteRestoranById=(req,res)=>{
  const restoranid=req.params.id;
  db.query("DELETE * FROM restoranlar WHERE id=?",[restoranid],(error,results)=>{
    if(error){
      console.log("Xatolig",error);
      return res.status(500).json({error: "Serverda xatolig"});
    }
    
     res.json({
      message: "Restoran muvaffaqiyatli o'chirildi"
    });
  });
};