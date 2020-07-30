const Topic = require('../models/topic');

exports.createTopic = (req,res,next) =>{
   res.render('topicForm/topicForm');
  
}

exports.addTopic = (req,res,next) =>{
    const topic = new Topic({
        title:req.body.title,
        body:req.body.body,
        courseId:req.body.courseId
    });
    topic.save()
    .then(result =>{
        console.log('success');
    })
    .catch(err=>{
        console.log(err);
    })

}