
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var port = process.env.PORT || 8080;

var router = express.Router();

var m = 'In room';

router.get('/', function(req, res) {
    res.json({ message: m });
})
.post('/', function(req, res) {
	m = req.body.loc;
	res.json({ message: 'Loc saved' });
});

app.use('/api/board', router);

var boardRouter = express.Router();

boardRouter.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/api.html'));
});

app.use('/board', boardRouter);

app.listen(port);

