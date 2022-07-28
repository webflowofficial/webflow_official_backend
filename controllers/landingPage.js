
const Model = require('./../models/landingPage');
//------------------------------------------------>


//Controllers--------------------------------------------------->
exports.getData = async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json({
            status: "Success",
            data: data
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}