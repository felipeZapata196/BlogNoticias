const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("mainPage", {

    })
})
app.get("/nacional", function(req, res){
    res.render("nacional", {

    })
})

app.get("/internacional", function(req, res){
    res.render("internacional", {

    })
})
app.get("/deportes", function(req, res){
    res.render("deportes", {

    })
})

app.get("/noticia", function(req, res){
    
    res.render("newsPage", {

    })
})

app.get("/noticia/:nombre", function(req, res){
   const nombre = req.params.nombre;
    res.render("newsPage", {
        nombre
    })
})


app.listen(3000, ()=>{
    console.log(`App runing on port 3000`)
  })

  
