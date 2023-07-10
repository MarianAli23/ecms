const express = require("express");
const apiRouter = express.Router();
const employeeComplaintRouter = require("./employeeComplaint")


apiRouter.use("/employee-complaint-form", employeeComplaintRouter)

module.exports = apiRouter