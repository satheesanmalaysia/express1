var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const app =express();
app.use(bodyParser.json());
/* GET users listing. */
let users=[{id:1,name:'sat'},{id:2,name:'unni'}];

router.get('/', function(req, res, next) {
  res.status(200).json(users);
});

module.exports = router;
