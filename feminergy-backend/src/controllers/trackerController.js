const Tracker = require("../models/trackerModel");

// Function to get dummy data for period and mood
// Function to get dummy data for period and mood
const getDummyData = () => {
    const twoDArray = [];
    for (let month = 0; month < 12; month++) {
        const monthData = [];
        for (let day = 4; day < 31; day++) {
            if ((day <12)) { // Set values for every 14th day
                monthData.push(Math.floor(Math.random() * 5) + 1); // Random value between 1 and 5
            } else {
                monthData.push(0);
            }
        }
        twoDArray.push(monthData);
    }
    return twoDArray;
}
const getPregnancyData = () => {
    const twoDArray = [];
    let startMonth = 3; // Random start month (0-3)
    for (let month = 3; month < 12; month++) { // Generate data for 9 months
        const monthData = [];
        for (let day = 1; day <= 30; day += 15) { // Iterate every 15 days
            // Random value between 1 and 5 representing different stages of pregnancy
            const stage = Math.floor(Math.random() * 5) + 1;
            monthData.push(stage);
        }
        twoDArray.push(monthData);
        startMonth = (startMonth + 1) % 12; // Move to the next month
    }
    return twoDArray;
}



const getAllTracker = async (req, res) => {
    try {
        // Fetch dummy data
        const period = getDummyData();
        const mood = getDummyData();
        const pregnancy = getPregnancyData();
        // You may also fetch data from MongoDB if needed
        // const trackers = await Tracker.findOne({_id:"66212cd5208e211d9dfaca81"});
        
        // Send dummy data in the response
        res.status(200).json({ period, mood ,pregnancy});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
}

const addTracker = async(req,res)=>{
    const twoDArray = new Array(12).fill().map(() => new Array(31).fill(0));

    const newTracker = new Tracker({
        weight: twoDArray,
        period: twoDArray,
        mood: twoDArray,
    });
    console.log(newTracker)
    try {
        await newTracker.save();
        res.status(201).json(newTracker);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {getAllTracker, addTracker}