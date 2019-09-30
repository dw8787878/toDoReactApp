const Sequelize = require('sequelize');

module.exports = Conn.define('tasks', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  task: Sequelize.TEXT,
  is_complete: Sequelize.BOOLEAN
})

/*
const Post = Sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
},
{
  freezeTableName: true,
});
*/

