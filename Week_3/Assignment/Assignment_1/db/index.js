const mongoose = require('mongoose');

//connect to mongoDb
mongoose.connect("");

//Defining Schemas

const AdminSchema = new mongoose.Schema({

})

const UserSchema = new mongoose.Schema({

})

const CourseSchema = new mongoose.Schema({

})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

moodule.exports = {
    Admin,
    User,
    Course
}