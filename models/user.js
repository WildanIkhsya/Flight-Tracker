const sequelize = require("sequelize");
const conn = require("../config/conn");

const Login = conn.define(
    "t_user",
    {
        user_id: { type: sequelize.BIGINT, primaryKey: true},
        username: { type: sequelize.STRING},
        password: { type: sequelize.STRING},
        login_time: { type: sequelize.DATE},
        logout_time: { type: sequelize.DATE},
        role: { type: sequelize.INTEGER, Key: true},
        createdAt: { field: 'created_at', type: sequelize.DATE},
        updatedAt: { field: 'updated_at', type: sequelize.DATE}
    },
    {
        freezeTableName: true
    }
);

module.exports = Login;