const express = require('express');
const app = express();

// CONFIG
// app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('pages/home');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});