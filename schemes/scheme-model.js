const knex = require('knex');
const configOptions = require('../knexfile').development;

const db = knex(configOptions);


module.exports = {
    find, 
    findById,
    findSteps,
    add,
    update,
    remove
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

function add(scheme) {
    return db('schemes').insert(scheme);
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove(id) {
    return db('schemes').where({ id }).del();
}