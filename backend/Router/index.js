const express = require("express");
const Router = express.Router();

const AllTrains = require("../Handlers/AllTrains");
const SpecificTrain = require("../Handlers/SpecificTrain")
Router.get("/trains", AllTrains);
Router.get("/trains/:id",SpecificTrain );

module.exports = Router;
