const express = require("express");
const conn = require("../config/conn");
const app = express();
const md5 = require('md5');

app.use(express.json());

app.listen(8000, () => {
    console.log("running on port 8000")
});

app.use(express.urlencoded({ extended: true}));
const Student = require("../models/student");

app.post('/students', async (req, resp) => {
try {
    const { fullname, date_of_birth, email, no_hp, created_at, updated_at } = req.body;

        const CreateStudent = new Student({
            fullname, 
            date_of_birth,
            email,
            no_hp, 
            created_at, 
            updated_at
        })

        await CreateStudent.save();

        resp.json(CreateStudent);
    } catch (err){
        console.error(err.message);
    }
});

app.get('/profils', async (req, res) =>
{
    try {
        const getStudent = await Student.findAll({});

        res.json(getStudent);
    } catch (err){
        console.error(err.message);
    }
});

app.get('/profils/:id', async (req, res) =>
{
    try {
        const id = req.params.id

        const getStudentbyid = await Student.findOne({
            where : {student_id:id}
        });

        res.json(getStudentbyid);
    } catch (err){
        console.error(err.message);
    }
});

app.delete('/profils/:id', async (req, res) =>
{
    try {
        const id = req.params.id

        const deleteStudent = await Student.destroy({
            where : {student_id:id}
        });

        await deleteStudent;

        res.json("Data berhasil di hapus");
    } catch (err){
        console.error(err.message);
    }
});

app.put('/profils/:id', async (req, res) =>
{
    try {
        const { fullname, date_of_birth, email, no_hp } = req.body;
        const id = req.params.id

        const updateStudent = await Student.update({
            fullname, 
            date_of_birth,
            email,
            no_hp
        }, { where : {student_id:id} } );

        await updateStudent;
        
        res.json("Data berhasil di update");
    } catch (err){
        console.error(err.message);
    }
});