const planModel = require("./../model/travelPlan");

// Get all plan
const getAllPlan = async (req, res) => {
    try{
        const planList = await planModel.find();
        res.status(200).json(planList && {travelPlan: planList} || {message: "No data found"});
    } catch {

    }
}

// Get plan by id
const getPlanByID = async(req, res) => {
    try {
        const planID = req.params?.id? req.params.id : null;
        const planByID = await planModel.findById(planID)
        res.status(planByID && 200 || 404).json(planByID && {plan: planByID} || {message: "No data found"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Add plan
const addPlan = async (req, res) => {
    try{
            const {destination, startDate, endDate, activities} = req?.body || {};
            if(!destination || !startDate || !endDate || !activities) {
                return res.status(400).json({message: "Missing required fields !"})
            }
            const travelPlan = new planModel({destination, startDate, endDate, activities})
            await travelPlan.save()
            .then(() => res.status(200).json({message: 'Date inserted successfully'}))
            .catch(error => console.log("error: ", error))
    } catch (error){
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
    
}

// Update Plan by id
const updatePlanByID = async(req, res) => {
    try {
        const planID = req.params?.id? req.params.id : null;
        const updatePlan = await planModel.findByIdAndUpdate(planID, req.body, {new: true})
        res.status(200).json({updatedPlan: updatePlan})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete plan
const deletePlanByID = async(req, res) => {
    try {
        const planID = req.params?.id? req.params.id : null;
        const planByID = await planModel.findByIdAndDelete(planID)
        res.status(planByID && 200 || 404).json(planByID && {message: "Plan deleted successfully" } || {message: "No Data Found"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {getAllPlan, addPlan, getPlanByID, updatePlanByID, deletePlanByID};