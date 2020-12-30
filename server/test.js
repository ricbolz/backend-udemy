var models = require('./server.js').models;

/*
var toSave = [
    {name: 'Rico', email: 'rico@rico.com'},
    {name: 'Rico1', email: 'ricoxx@rico.com'},
    {name: 'Rico2', email: 'ricoss@rico.com'},
    {name: 'Ri', email: 'ri@rico.com'},
    {name: 'Rico3', email: 'ricoddd@rico.com'},
    {name: 'Rico4', email: 'ricowww@rico.com'},
    {name: 'Rico5', email: 'ricokkkk@rico.com'},
    {name: 'Rico6', email: 'ricollll@rico.com'},
    {name: 'dare', email: 'omae@rico.com'},
    {name: 'Ryooo', email: 'juuu@rico.com'},
];

toSave.map(obj => {
    models.Profile.create(obj, (err,created) => {
        console.log("Created?", created);
    })
})

*/
var filter = {
    where: {
        email: {like: 'rico'}
    }, // kind of like mySQL where Clause
    order: 'id ASC', // Order by: "field direction"
    limit: 10
}

models.Profile.find(filter, (err,found) => {
    console.log("Found?", err, found);
})