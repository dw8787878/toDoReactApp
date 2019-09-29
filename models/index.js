
const Fs = require('fs');
const Path = require('path');
//const Sequelize = require('sequelize');

const Basename = Path.basename(__filename);
var db = {};

Fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== Basename) && (file.slice(-3) ==='.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

  /*
  Object.keys(db).forEach(modelName => {

  })
  */
console.log('hello')
  //console.log('this is conn:',Conn())
