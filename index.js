var express = require('express');
var cors = require('cors');
require('dotenv').config()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

//npm i multer Make sure to run to install multer

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", uploadFiles);
function uploadFiles(req, res) {
    console.log(req.body);
    res.json({ Name: formData.originalname, Type: formData.mimetype, Size: formData.size});
}


const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Your app is listening on port ' + port)
});
