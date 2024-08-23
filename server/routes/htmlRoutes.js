const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, '../..//client/index.html')));

=======
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
>>>>>>> 79f3e56d1233ca5665868c6c2831da93c2f9d8bb
