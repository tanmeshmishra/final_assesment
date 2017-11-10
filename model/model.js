var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signupSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String },
    password: { type: String },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },
    totalCost: { type: Number }
});

var movieData = new Schema({
    user: {type: String},
    movieId: { type: Number, unique: true },
    movieName: { type: String },
    genres : { type: String },
    m_img: { type: String }, 
    description: { type: String},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

var Signup = mongoose.model('signupData', signupSchema);
var Products = mongoose.model('productData', movieData);

module.exports = {
    Signup:Signup,
    Products: Products

}
