var models = require('./server.js').models;

models.Profile.findOrCreate({name: 'Rico1'}, (err, profile) => {
    if(err){
        console.log("There was an error".err);
    }
    else if(profile){
        profile.email = 'rico@rico2.com';
        profile.save((ue,updated) => {
            console.log("Updated?", updated)
        })
    }
    
})