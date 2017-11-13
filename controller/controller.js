var mongoose = require('mongoose');
var Signup = mongoose.model('signupData');
var Movie = mongoose.model('movieData');
var Tv = mongoose.model('tvData');
var Episode = mongoose.model('EpisodeData');

exports.createUser = (req, res) => {
    var signup = new Signup({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        totalCost: 0,
        created_at: new Date(),
        updated_at: ""
    });
    signup.save((error, response) => {
        if (error) {
             res.json(error);
        }
        else {
            res.json({
                success: true,
                body: response
            });
        }
    });
} 



exports.getAllUsers = (req, res) => {
    Signup.find({}, function (error, response) {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}


exports.getUser = (req, res) => {
    var email = req.params.email;
    Signup.findOne({ email: email }, function (error, response) {
        if (error) {
            return res.json(error)
        }
        res.json(response);
    });
}


exports.insertMovie = (req,res) => {
    var movie = new Movie({
        movieId: req.body.movieId,
        movieName: req.body.movieName,
        m_img: req.body.m_img,
        releaseDate: 1,
        genres: req.body.genres,
        description: req.body.description,
        created_at: new Date(),
        updated_at: ""
    });
    movie.save((error, response) => {
        if (error) {
           return res.json({
                success: false,
                body: error
            });
        }
        return res.json({
            success: true,
            body: response
        });
    });
}   

exports.insertTv = (req, res) => {
  
    var tv = new Tv({
        tvId: req.body.tvId,
        tvName: req.body.tvName,
        tv_img: req.body.tv_img,
        releaseDate: 1,
        genres: req.body.genres,
        description: req.body.description,
        created_at: new Date(),
        updated_at: ""
    });
    tv.save((error, response) => {
        if (error) {
            return res.json({
                success: false,
                body: error
            });
        }
        return res.json({
            success: true,
            body: response
        });
    });
}   

exports.getAllMovie = (req, res) => {
    Movie.find({}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.getAllTv = (req, res) => {
    Tv.find({}, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.deleteMovie = (req,res) => {
    Movie.remove({movieName: req.params.name},(error, response) => {
        if (error) {
            console.log(error);
            return res.json(req, res, error);
        }
        
        res.json(response);
    });
}

exports.deleteTv = (req, res) => {
    Tv.remove({ tvName: req.params.name }, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}

exports.deleteEpisode = (req, res) => {
    Episode.remove({ name: req.body.name }, (error, response) => {
        if (error) {
            return res.json(req, res, error);
        }
        res.json(response);
    });
}


// exports.changePassword = (req, res) => {
//     console.log('In change Password');
//     let email = req.params.email;
//     let password = req.params.password;
//     console.log(email);
//     User.findOne({ email: email }, (error, user) => {
//         if (bcrypt.compareSync(req.params.password, user.password)) {
//             console.log('passwords match');
//             user.password = bcrypt.hashSync(req.body.newPassword, 10);
//             user.updated_at = new Date();
//             user.save((err, response) => {
//                 if (err) {
//                     res.send(err);
//                 }
//                 res.json(response);
//             });
//         }
//         else {
//             return res.json(error);
//         }
//     });
// }



