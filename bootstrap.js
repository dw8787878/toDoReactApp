module.exports = async () => {

  const Tasks = require('./models/tasks');

  const errHandler = (err) => {
    console.error('Error: ', err);
  }

  const tasks = await Tasks.create({ task: 'feed the dog', is_complete: false }).catch(errHandler);


//Find All tasks
const allTasks = await Tasks.findAll({
}).catch(errHandler);

console.log("All tasks Tweets: ", JSON.stringify(allTasks));
}
