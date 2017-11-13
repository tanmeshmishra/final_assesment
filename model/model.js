var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var signupSchema = new Schema({
    email: { type: String, unique: true, required: true },
    name: { type: String ,required: true},
    role: {type: Number, default:0 },
    password: { type: String ,required: true},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date },

});

var movieData = new Schema({
    movieId: { type: Number, unique: true },
    movieName: { type: String, unique:true },
    genres : { type: String },
    m_img: { type: String }, 
    description: { type: String},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

var tvData = new Schema({ 
    tvId: { type: Number, unique: true },
    tvName: { type: String, unique:true },
    genres : { type: String },
    tv_img: { type: String }, 
    description: { type: String},
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

var EpisodeData = new Schema({
    EpisodeNumber: {type: Number, unique : true},
    E_img: {type: String}
});

var Signup = mongoose.model('signupData', signupSchema);
var Movie = mongoose.model('movieData', movieData);
var Tv = mongoose.model('tvData', tvData);
var Episode = mongoose.model('EpisodeData', EpisodeData);

module.exports = {
    Signup:Signup,
    Movie:Movie,
    Tv:Tv,
    Episode : Episode
}
