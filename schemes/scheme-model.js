const knex = require('knex');
const configOptions = require('../knexfile').development;

const db = knex(configOptions);


module.exports = {
    find, 
    findById,
    findSteps
};


function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes').where({ id });
}

function findSteps(id) {
    return db('schemes')
    .leftJoin('steps')
    .select('schemes.id','schemes.scheme_name','steps.step_number','steps.instructions')
    .where({ 'schemes.id': id });
}