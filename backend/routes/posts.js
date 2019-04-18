var express = require('express');
var router = express.Router();

let db = [];

/* GET users listing. */
router.get('/', (req, res, next) => {
  const data = JSON.stringify(db)
  res.json(db)
});

router.post("/", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const body = req.body.body;
  let data = {title: title, author: author, body: body};
  db.push(data);
  res.json(data);
})



module.exports = router;