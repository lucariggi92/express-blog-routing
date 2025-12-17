import express from "express";
import {monumentiSanCataldo} from "../data.js";

const router = express.Router();

//index
router.get("/", (req, res) => {       
      const risposta = {
        info: {
            total: monumentiSanCataldo.length,
        },
        results: monumentiSanCataldo
    }
       res.json(risposta)
})



//SHOW
router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const resp = monumentiSanCataldo.find(monumento => monumento.id===id);
    res.json (resp)
})

//STORE
router.post("/", (req,res)=>{
    res.send("creo nuova card monumento")
})

//UPDATE
router.put("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna card monumento n."+ id)
})

//MODIFY
router.patch("/:id", (req,res)=>{
    const id =req.params.id;
    res.send("aggiorna parzialemte card monumento n."+ id)
})

//DESTROY
router.delete("/:id", (req,res)=>{
        const id =req.params.id;
        res.send("cancella card monumento n."+ id)
})


export default router;