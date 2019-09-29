const Sequelize = require('sequelize');
const db = require('./models/index')

const Conn = new Sequelize('sys', 'newuser', 'Unique123456#', {
  host: 'localhost',
  dialect: 'mysql'
})

Conn
  .authenticate()
  .then(() => {
    console.log('MySql Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
