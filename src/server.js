const express = require('express');
const app = express();

const indexRoute = require('./routes/employees');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use('/', indexRoute);

// Start Server
app.listen(app.get('port'), () => {
    console.log('Server runing on port ', app.get('port'));
});