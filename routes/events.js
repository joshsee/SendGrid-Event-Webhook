const express = require('express')
// const app = express()
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/",function(req,res,next){
    console.log(req.body);
    res.send("response");
})

// router.all('/', function (req, res) {
//   console.log(`----------- EVENT START ----------- `)
//   console.log(req.body)
//   console.log(`----------- EVENT END ----------- `)
//   res.json(req.body)
// })

module.exports = router