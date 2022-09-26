const sequelize = require("sequelize");
const conn = require("../config/conn");

const Student = conn.define(
    "t_student",
    {
        student_id: { field: 'student_id', type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { field: 'user_id', type: sequelize.INTEGER},
        fullname: { type: sequelize.STRING},
        date_of_birth: { type: sequelize.DATEONLY},
        email: { field: 'email', type: sequelize.STRING},
        no_hp: { field:'no_hp',type: sequelize.INTEGER},
        createdAt: { field: 'created_at', type: sequelize.DATE},
        updatedAt: { field: 'updated_at', type: sequelize.DATE}
    },
    {
        freezeTableName: true
    }
);

module.exports = Student;