

const ExamController = require(".../controllers/exam.controller")
const ... = require(".../models/exam.model")


module.exports = (app)=>{
    app.get("/api/...", ExamController.findAll...)
    app.get("/api/.../:id", ExamController.findOne...)
    app.post("/api/...", ExamController.createNew...)
    app.put("/api/.../:id", ExamController.update...)
    app.delete("/api/.../:id", ExamController.delete...)    
}