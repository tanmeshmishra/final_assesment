var mongoose = require('mongoose');
var Signup = mongoose.model('signupData');
var Products = mongoose.model('productData');

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

exports.postCart = (req, res) => {
    var product = new Products({
        user: req.body.email,
        movieId: req.body.id,
        movieName: req.body.name,
        genres: req.body.price,
        m_img: req.body.p_img, 
        description: req.body.description,
        created_at: new Date(),
        updated_at: ""
    });
    product.save((error, response) => {
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

exports.getCart = (req, res) => {
    var email=req.params.email;
    console.log(email);
    Products.find({user: email},(error, response) => {
        if (error) {
            res.json(error);
        }
        res.json(response);
    })
}



