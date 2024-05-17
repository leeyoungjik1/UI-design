const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config')
const logger = require('morgan')
const usersRouter = require('./src/routes/users')


const corsOptions = {
    origin: '*',
    credentials: true
}

mongoose.connect(config.MONGODB_URL)
.then(() => console.log('데이터베이스 연결 성공'))
.catch(e => console.log(`데이터베이스 연결 실패: ${e}`))


app.use(cors(corsOptions))
app.use(express.json())
app.use(logger('tiny'))


app.use('/api/users', usersRouter)


app.use((req, res, next) => {
    res.status(404).send('페이지를 찾을수 없습니다.')
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('서버 에러')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})