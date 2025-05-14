const express = require('express');
const database = require('./database/database');
const academyController = require('./controller/academyController');
const courseController = require('./controller/courseController');


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

database.connectToDataBase();

app.get('/courses', courseController.getAllCourses);
app.post('/course', courseController.createCourse);
app.delete('/course/:id', courseController.deleteCourse);
app.patch('/course/:id', courseController.updateCourse);

app.get('/academies', academyController.getAllAcademies);
app.post('/academy', academyController.createAcademy);
app.delete('/academy/:id', academyController.deleteAcademy);
app.patch('/academy/:id', academyController.updateAcademy);


app.listen(process.env.PORT, (err)=> {
    if(err) return err.message;
    console.log("Succesfully started server");
});