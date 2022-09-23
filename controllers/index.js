const express = require("express");
const conn = require("../config/conn.js");
const db = require("../config/conn.js");
const app = express();

app.use(express.json());

app.listen(8000, () => {
    console.log("running on port 8000")
});

app.get('/profil/:id', (req, resp) => {
    let query = "SELECT * FROM t_user";
    byid=req.params.id;
    conn.query(query,(err, result, fields) => {
        if (err) {
            return resp.status(500).send({
                status: "error",
                message: err.message,
            });
        }
        return resp.json({
            status: "success",
            Data: 
            {
                user_id:result[0].user_id,
                username: result[0].username,
                login_time: result[0].login_time,
                logout_time: result[0].logout_time,
                role: result[0].role,
                created_at: result[0].created_at,
                updated_at: result[0].updated_at,
            },
        });
    });
});