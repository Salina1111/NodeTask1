exports.postfunction = function (req, res) {
    res.json({ username: 'Flavio'});
 }; 
 
 exports.getfunction = function (req, res) {
     res.send("Hello!");
 };