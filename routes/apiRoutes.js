const fs = require('fs');
const notesData = require("../db/db.json");

module.exports = function(app){

    function writeToDB(notes){
        notes = JSON.stringify(notes);
        console.log (notes);
        fs.writeFileSync("./db/db.json", notes, function(err){
            if (err) {
                return console.log(err);
            }
        });
    }
}