const Course = require('../model/course');

exports.createCourse = async(req, res) => {
    try{
    const course = await Course.create(req.body);
    res.status(201).json({
        status: "success",
        data: {
            course: course,
        },
    });
} catch(err){
    res.status(500).json({
        status: "fail",
        message: err.message,
    });
};
};

exports.getAllCourses = async(req, res) => {
   try{
    const courses = await Course.find();
    res.status(201).json({
        status: "success",
        data: {
            courses: courses,
        },
    });
} catch(err){
    res.status(500).json({
        status: "fail",
        message: err.message,
    });
};
};

exports.updateCourse = async(req, res) => {
    try{
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(201).json({
        status: "success",
        data: {
            course: course,
        },
    });
} catch(err){
    res.status(500).json({
        status: "fail",
        message: err.message,
    });
};
}
exports.deleteCourse = async (req, res) => {
    try{
    await Course.findByIdAndDelete(req.params.id);
    res.status(201).json({
        status: "success",
    });
} catch(err){
    res.status(500).json({
        status: "fail",
        message: err.message,
    });
};
}