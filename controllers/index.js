const express = require("express");
const conn = require("../config/conn");
const app = express();

app.use(express.json());

app.listen(8000, () => {
    console.log("running on port 8000")
});

app.use(express.urlencoded({ extended: true}));
const Login = require("../models/user");

app.post('/login', async (req, resp) => {
try {
    const { username, password, login_time, logout_time, role, created_at, updated_at } = req.body;



    // let query = "insert into t_user values (NULL,?,?,?,?,?,?,?)";
    // let values = [username, password, login_time, logout_time, role, created_at, updated_at];

//     conn.query(query, values, async (err, result, fields) =>
//     {
//         if (err)
//         {
//             return resp.status(403).send(
//                 {
//                     status: "error",
//                     message: err.message,
//                 }
//             );
//         }
        const Loginuser = new Login({
            username, 
            password, 
            login_time, 
            logout_time, 
            role, 
            created_at, 
            updated_at
        })

        await Loginuser.save();

        resp.json(Loginuser);
    } catch (err){
        console.error(err.message);
    }
});

app.get('/profil/:id', (req, resp) => {
    let query = "SELECT * FROM t_user";

    conn.query(query,(err, result, fields) => {
        if (err) {
            return resp.status(500).send({
                status: "error",
                message: err.message,
            });
        }
        return resp.json({
            status: "success",
            Data: result,
        });
    });
});
