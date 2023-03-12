import EmployeeModel from '../models/employeeModel.js'


export const getEmployees = async (req, res) => {
    try {
        const allEmployees = await EmployeeModel.find()

        res.status(200).json(allEmployees);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const createEmployee = async (req, res) => {
    const employee = req.body;

    const newEmployee = new EmployeeModel(employee);
    try {
        await newEmployee.save();

        res.status(200).json(newEmployee);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getEmployee = async (req, res) => {
    const id = req.params.id;

    const oneEmployee = await EmployeeModel.findById(id);

    try {
        res.status(200).json(oneEmployee);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id;


    try {
        await EmployeeModel.findByIdAndDelete(id);

        res.status(200).json({message: 'Employee deleted successfully'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const updateEmployee = async (req, res) => {
    const id = req.params.id;
    const employee = req.body;
    
    try {
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(id, employee, {new: true});
        res.status(200).json(updatedEmployee)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    


}

