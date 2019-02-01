const knex = require('../connection');

export const findAll = (completed?: boolean) => {
  let results = knex('todos')
    .select('*');
  if(completed != null) {
    results = results.where({ completed });
  }
  return results;
}

export const find = (id: string) => knex('todos').select('*').where({ id });

export const create = (todo) => knex('todos').insert(todo).returning('*');

export const update = (id: string, todo) => knex('todos').update(todo).where({ id }).returning('*');

export const del = (id: string) => knex('todos').del().where({ id }).returning('*');
