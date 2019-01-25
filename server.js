let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.listen(3000);