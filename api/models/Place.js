import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema({
    owner : {type: mongoose.Schema.Types.ObjectId, ref : 'User'},
    title : String,
    address : String,
    photos : [String],
    description : String,
    perks : [String],
    extraInfo : String,
    checkIn : Number,
    checkOut : Number,
    maxGuests :  Number,
})


const Placemodel = mongoose.model('Place', placeSchema);
modules.exports = Placemodel;





// Notes for me:
// Creating a model : 
// mongoose.model(modelName, schema)

// refer this doc :
//https://mongoosejs.com/docs/guide.html#models