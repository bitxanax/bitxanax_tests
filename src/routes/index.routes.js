/*Un método de ruta se deriva de uno de los métodos HTTP y 
se adjunta a una instancia de la clase express.*/
const React = require('react');

//instanceamos el módulo router
const{Router}= require('express');
const router= Router();

// GET method route
/*cuando alguien ingrese a la routa principal,se
 "renderizará" el archivo index.hbs */
router.get('/',(req,res) => {
    res.render('index')
})

router.get('/ukelele',(req,res)=>{
    res.render('tunner')
})

router.get('/lyrics',(req,res)=>{
    res.render('lyrics')
})
router.get('/art',(req,res)=>{
    res.render('art')
})
router.get('/p5',(req,res)=>{
    res.render('p5_practicing')
})

router.get('/voice_modifier',(req,res)=>{
    res.render('voice')
})

router.get('/game',(req,res)=>{
    res.render('game')
})
//exportamos router
module.exports = router;