
const Model = require('./../models/landingPage');
const ModelContact = require('./../models/contact');
//------------------------------------------------>


//Controllers--------------------------------------------------->
exports.getData = async (req, res) => {
    try {
        const data = await Model.find();
        res.status(200).json(data[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}

//--------------------------------------------------------------->
exports.contact = async (req, res) => {
    try {
        await ModelContact.create(req.body);
        res.status(201).json({
            status: "success"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
}