const express = require('express')
const router = express.Router()
const account = require('../controllers/account')
const bodyParser = require('body-parser')
const multer = require('multer')

router.use(bodyParser.json()) 
router.use(bodyParser.urlencoded({ extended: true }))

router.post('/register', (req, res) => {
    const result = account.registerUser(req.body.name,req.body.email,req.body.password);
    res.send(result);
  })
router.post('/login', (req, res) => {
  const result = account.login(req.body.email,req.body.password);
  res.send(result);
  })
router.post('/forgotpassword', (req, res) => {
  const result = account.forgotPassword();
  res.send(result);
  })  
router.post('/changepassword', (req, res) => {
    const result = account.changePassword();
    res.send(result);
    })  

module.exports = router 