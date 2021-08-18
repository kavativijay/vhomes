var express = require('express');
var router = express.Router();


router.get('/',function(req, res, next) {
  console.log("asas")
	var data = {title : "VBond - Leading Manufacturers & Suppliers of Interior & Exterior", 
	seodescription: "We offer variety of products ranging from Tile adhesives, grouts, wall care, textures and AAC Block Mortars, Paints & Primers for your building and structural needs.", 
	seokeywords: "Leading Manufacturers & Suppliers of Interior & Exterior", 
	seorobots: "index,follow", 
	seocanonical: "https://www.valuebond.in/",
    ogsitename:"valuebond",
    ogtype: "website", 
	ogtitle:"ValueBond - Leading Manufacturers & Suppliers of Interior & Exterior", 
	ogdescription: "We offer variety of products ranging from Tile adhesives, grouts, wall care, textures and AAC Block Mortars, Paints & Primers for your building and structural needs."}
	res.locals.isIndex = true
	res.locals.isMainpage = true
	res.render('index',data);
});


module.exports = router;
