const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const topicSchemama = new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    courseId:{
        type:Schema.Types.ObjectId,
        ref:'Course',
        required:true
    }
});
module.exports = mongoose.model('Topic',topicSchemama);