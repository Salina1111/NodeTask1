const Note = require('./../Model/model');


// Create and Save a new Note
exports.create = (request, response) => {
  
    let note = new Note({
        username: request.body.username, //|| "Untitled Note", 
        age: request.body.age,
        date: request.body.date
    });

    // Save Note in the database
    note.save()
    .then(data => {
        // response.json({"message": "successfully posted"});
        response.json(note);
    }).catch(err => {

        response.status(500).json({
            message: "Some error occurred while creating the Note." 
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    console.log('----------------------------------------------ggggg');
    
    Note.find()
    .then(note => {
       console.log('-------------------',note);
        res.json(note);
    }).catch(err => {
        res.status(500).json({
            message: "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.id)
    .then(note => {
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id "
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " 
        });
    });
};


// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.id, {
        username: req.body.username, 
        age: req.body.age,
        date: req.body.date
    }, {new: true})
    .then(note => {
        //res.send({message: "successfully posted"});
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.id
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.id)
    .then(note => {
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });
};