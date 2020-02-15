var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  console.log(`----------- INBOUND PARSE START ----------- `)
  console.log(req.body)
  console.log(`----------- INBOUND PARSE END ----------- `)
})

module.exports = router