var express = require("express"),
    app = express();

const response = [{username: "Salina",
                        age: 22}];


exports.postfunction = function (req, res) {
    
    response.push({username: req.body.username,
                    age: req.body.age
                });

        res.json({message:"posted"});
}; 

exports.getfunction = function (req, res) {
    res.json(response);

};