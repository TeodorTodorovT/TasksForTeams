import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    birthday: Date,
    salary: Number,
    completedTasks: {default: 0, type: Number}
});

const EmployeeModel = mongoose.model('EmployeeModel', employeeSchema);

export default EmployeeModel;