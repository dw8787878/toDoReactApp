const Sequelize = require('sequelize');
//const db = require('./models/index')

const Conn = new Sequelize('ToDo', 'newuser', 'Unique123456#', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
})

Conn
  .authenticate()
  .then(() => {
    console.log('MySql Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = Conn;
  global.Conn = Conn;

  require('./bootstrap')();
