const express = require("express");
const conn = require("../config/conn");
const app = express();
const md5 = require('md5');
const Login = require("../models/user");

app.use(express.json());

app.listen(8000, () => {
    console.log("running on port 8000")
});

app.use(express.urlencoded({ extended: true}));

app.post('/user', async (req, resp) => {
try {
    const { username, password, login_time, logout_time, role, created_at, updated_at } = req.body;

    const mdpassword = md5(password);

        const Createuser = new Login({
            username, 
            password : mdpassword, 
            login_time, 
            logout_time, 
            role, 
            created_at, 
            updated_at
        })

        await Createuser.save();

        resp.json(Createuser);
    } catch (err){
        console.error(err.message);
    }
});

// app.post('/login', async (req, res) => {
    
//     try {
//         const username = req.body.username
//         const password = req.body.password
//         const mdpassword = md5(password);

//         const User = await Login.findOne({
//             username:username
//         });

//         // const Validation = await md5.compare(password, User.password);

//         if (username == 'username' && mdpassword == 'password') {
//             res.status(401).json({
//               message: "Login Failed",
//               error: "Username or Password not valid",
//             })
//           } 
//         } catch (error) {
//           res.status(400).json({
//             message: "An error occurred",
//             error: error.message,
//           })
// }})


app.get('/profil', async (req, res) =>
{
    try {
        const getUser = await Login.findAll({});

        res.json(getUser);
    } catch (err){
        console.error(err.message);
    }
});

app.get('/profil/:id', async (req, res) =>
{
    try {
        const id = req.params.id

        const getUserbyid = await Login.findOne({
            where : {user_id:id}
        });

        res.json(getUserbyid);
    } catch (err){
        console.error(err.message);
    }
});

app.delete('/profil/:id', async (req, res) =>
{
    try {
        const id = req.params.id

        const deleteUser = await Login.destroy({
            where : {user_id:id}
        });

        await deleteUser;

        res.json("Data berhasil di hapus");
    } catch (err){
        console.error(err.message);
    }
});

app.put('/profil/:id', async (req, res) =>
{
    try {
        const { username, password, role } = req.body;
        const id = req.params.id;
        const mdpassword = md5(password);

        const updateUser = await Login.update({
            username, 
            password : mdpassword, 
            role
        }, { where : {user_id:id} } );

        await updateUser;
        
        res.json("Data berhasil di update");
    } catch (err){
        console.error(err.message);
        res.status(500).send("Update data failed");
    }
});