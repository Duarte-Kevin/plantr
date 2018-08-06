let Sequilize = require('sequelize');
let db = new Sequilize('postgres://localhost:5432/plantr');

const Gardener = db.define('gardener',{

  name: Sequilize.STRING,
  age: Sequilize.INTEGER

})

const Plot = db.define('plot', {

  size: Sequilize.INTEGER,
  shaded: Sequilize.BOOLEAN

})

const Vegtable = db.define('vegtable',{

  name: Sequilize.STRING,
  color: Sequilize.STRING,
  planted_on: Sequilize.DATE

})

Plot.belongsTo(Gardener);
Vegtable.belongsToMany(Plot, {through: 'vegtable_plot'});
Plot.belongsToMany(Vegtable, {through: 'vegtable_plot'});

module.exports = {
  db,
  Gardener,
  Plot,
  Vegtable
}


