const path = require("path");

module.exports = function(app){
    
    // Route to go to notes page
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
}