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
    where: {}, // kind of like mySQL where Clause
    order: 'date ASC', // Order by: "field direction"
    limit: 3,
    include: {
        relation: 'Posts',
        scope: {
            limit: 5,
            order: 'date DESC',
            include: {
                relation: 'Image',
                limit: 1,
                where: {type: 'thumbnail'}
            }
        }
    }
}

models.Profile.find({where: {name: 'Rico'}, order:'id DESC'}, (err,found) => {
    console.log("Found?", err, found);
})