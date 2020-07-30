const Course = require('../models/course');//Course model

exports.createCourse = (req,res,next) =>{
    //res.render('courseForm/courseForm');
     //Select data from course table
     Course.find()
     .then(result =>{
         res.render('topicForm/topicForm',{courseData:result,message:'hey'});
         console.log(result);
     })
     .catch(err =>{
         console.log(err);
     })
}
exports.addCourse =(req,res,next) =>{
   
     //save data to course table
    const  course= new Course({
        name:req.body.name,
        content:req.body.content
    });
    course.save()
    .then(result =>{
        console.log('success');
    })
    .catch(err =>{
       console.log(err);
    });
    // const course = new Course({
    //     name:req.body.name,
    //     content:req.body.content
    // });
    // course.save()
    // .then(result =>{
    //     console.log('success');
    // })
    // .catch(err =>{
    //     console.log(err);
    // })
}