import express from "express"

const app = express();
const port = 3000;

app.listen(port, function (){
    console.log("Ciao Luca il server è in ascolto sulla porta 3000");
})