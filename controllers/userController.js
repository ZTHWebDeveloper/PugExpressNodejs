const User = require('../models/user')//userModel
exports.getAddUser = (req,res,next) =>{
    res.render('user/userForm');
    User.findById('5dcbca1808ec7b93f05fe7d3')
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })
    
};
exports.addProduct= (req,res,next) =>{
  const  user= new User({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password
  });
  user.save()
  .then(result =>{
      res.redirect('/');
  })
  .catch(err =>{
     console.log(err);
  });
}