const express = require('express');
const planRouter = express.Router();

const { getAllPlan, addPlan, getPlanByID, updatePlanByID, deletePlanByID} = require('../controller/planController');

planRouter.get('/', getAllPlan)
planRouter.get('/:id', getPlanByID)

planRouter.post('/', addPlan)
planRouter.patch('/:id', updatePlanByID)

planRouter.delete('/:id', deletePlanByID)

module.exports = planRouter;