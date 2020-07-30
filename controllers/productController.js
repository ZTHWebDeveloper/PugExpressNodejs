const Product = require('../models/product');//model

//Save Data
const addProduct = (req,res) =>{
    const product = new Product({
        title:req.body.title,
        price:req.body.price
    });
    product.save()
    .then(result =>{
        res.json(result);
    })
    .catch(err =>{
        console.log(err);
    });
    
 };

 //all data
 const index = (req,res,next) =>{
     Product.find()
     .then( result =>{
         res.json(result);
       
     })
     .catch(err =>{
         console.log(err);
     });
   

}

//update data
const updateProduct = (req,res,next) =>{
    Product.findByIdAndUpdate(req.params.productId,{
          title:req.body.title,
          price:req.body.price
    },{
        new:true
    })
    .then(result =>{
        res.json(result)
    })
    .catch( err =>{
        res.json(err)
    });
}


//delete data
const deleteProduct = (req ,res) =>{
   Product.findByIdAndRemove(req.params.productId)
   .then(result =>{
      res.json(result)
   })
   .catch(err =>{
       res.json(err)
   })
}

 module.exports = {
     addProduct,
     index,
     deleteProduct,
     updateProduct
 }