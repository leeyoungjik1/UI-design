const express = require('express')
const router = express.Router()

router.get('/sun', (req, res) => {
    res.send('제 이름은 sun 입니다.')
})

router.get('/syleemomo', (req, res) => {
    res.send('제 이름은 syleemomo 입니다.')
})

module.exports = router