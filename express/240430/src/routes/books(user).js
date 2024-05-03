const express = require('express')
const Book = require('../models/Book')
const {isAuth, isAdmin} = require('../../auth')
const expressAsyncHandler = require('express-async-handler')

const router = express.Router()

router.get('/test', (req, res, next) => {
    res.send('테스트')
})




module.exports = router