const Express = require('express');

const App = Express();

const Port = 3000;
//change this to your local path:
const Path = '/Users/darrynwu/todoappreact/public/';


App.use(Express.static(Path));

App.listen(Port, (err)=>{
  if (err) {
    return console.log('error:', err);
  }
  console.log(`Server is running local at port: ${Port}`);
});
