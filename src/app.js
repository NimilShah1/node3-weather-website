
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

const publicdir = path.join(__dirname,'../public')
const viewpath = path.join(__dirname,'../templates/views')
const partialpath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)
app.use(express.static(publicdir))


app.get('',(req,res ) =>{

   res.render('index',{
       title:'Weather',
       name:'nimil'
   })
})

app.get('/about',(req,res ) =>{

    res.render('about')
 })

 app.get('/help',(req,res ) =>{

    res.render('help')
 })
app.get('/weather',(req,res ) =>{


    if(!req.query.address){
   return res.send ({
        error : 'No search'    })
}
    res.send({
        weather : 'snowy',
        location: 'ahmedabad',
        address: req.query.address 
    })
  
    
    
})



app.get('/help/*',(req,res ) =>{

    res.send("Error page")
    
})

app.get('*',(req,res ) =>{

    res.send("Error page")
    
})
app.listen(3000,()=>{

    console.log("Server is running")
})