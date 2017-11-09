var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

//override POST method
app.use(methodOverride('_method'));
//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//link routes
var routes = require('./controllers/burgersController.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000
app.listen(PORT, function(){
	console.log("Listening at Port " + PORT)
});