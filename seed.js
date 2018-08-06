let { db, Gardener, Plot, Vegtable} = require('./models');

Gardener.bulkCreate([
  {name: 'bob', age: 16},
  {name: 'bobby', age: 26},
  {name: 'bobbo', age: 36},
  {name: 'bobba', age: 46},
  {name: 'bobba sr', age: 56},
  {name: 'bobba jr', age: 66},
  {name: 'colonel', age: 76}
]);


db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    // db.close() // only if using a version of node without `finally`
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close()
  })
