var models = require('./server.js').models;

models.Profile.findOrCreate({name: 'Rico1'}, (err, profile) => {
    if(err){
        console.log("There was an error".err);
    }
    else if(profile){
        profile.updateAttributes({
            email:"rico@rico.com"
        },(updateError, updated) => {
            console.log("Saved?", updateError,updated);
        });
    }
    console.log("data?", err, profile);
})