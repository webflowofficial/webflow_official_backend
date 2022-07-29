const fs = require('fs');
const Model = require('./../models/landingPage');
//------------------------------------------------>

const getData = () => {
    const data = JSON.parse(fs.readFileSync(`${__dirname}/../devData/landingPage.json`, 'utf-8'));
    return data;
}

exports.save = async () => {
    try {
        await Model.create(getData());
        console.log("succesfully added data to database");
    } catch (err) {
        console.log(err);
    }
}
