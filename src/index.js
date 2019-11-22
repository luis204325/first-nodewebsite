const express = require('express');
const app = express();
const path = require('path');

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//minddleware

//routes 

app.get('/', (req, res) =>{ 

    res.render('index');
});
// static files


//listening the server
app.listen(app.get('port'), () => {

    console.log('server on port', 3000);

});

