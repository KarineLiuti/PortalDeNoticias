var app = require('./config/server');

app.listen(3000, (req, res) => {
    console.log('Server ON');
});