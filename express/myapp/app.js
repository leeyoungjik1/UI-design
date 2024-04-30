const express = require('express')
const app = express()
const port = 3000
// const apiHandler = require('./handlers')
// const users = require('./users.json')

// const myLogger = function(req, res, next){
//     console.log('LOGGED')
//     next()
// }
// const requestTime = function(req, res, next){
//     // console.log('변경전', req.requestTime)
//     req.requestTime = Date.now()
//     console.log('로그기록', new Date(req.requestTime))
//     next()
// }


// app.use(myLogger)
// app.use(requestTime)

// app.use(function(req, res, next){
//     console.log('Time: ', Date.now())
//     next()
// })

// app.use('/user/:id', 
// function(req, res, next){
//     console.log('Request Type: ', req.method)
//     next()
// }, 
// function(req, res, next){
//     console.log('Request URL: ', req.originalUrl)
//     next()
// })

// app.get('/user/:id', 
// function(req, res, next){
//     if(req.params.id == 0) next('route')
//     else next()
// },
// function(req, res, next){
//     res.send({'User Info': req.params.id, 'msg': '일반 사용자'})
// })

// app.get('/user/:id', function(req, res, next){
//     res.send('두번째 동일한 요청: 관리자')
// })

// app.use('/api', apiHandler)

// app.get('/error', (req, res, next) => {
//     throw new Error('서버 오류 발생')
// })

// app.get('/', (req, res) => {
//     let responseText = 'Hello World\n'
//     responseText += '접속시간: ' + new Date(req.requestTime)
//     res.send(responseText)
// })

// app.post('/', function(req, res){
//     res.send('Got a POST request')
// })

// app.put('/user', function(req, res){
//     res.send('Got a PUT request app at /user')
// })

// app.delete('/user', function(req, res){
//     res.send('Got a DELETE request /user')
// })

// app.use(function(err, req, res, next){
//     console.log(err.stack)
//     res.status(400).send('Something broke')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// 연습과제 1

app.get('/users', (req, res, next) => {
    res.send(users.map(user => {
        const {name, language, bio} = user
        return {name: name, lang: language, bio: bio}
    }))
})


// 연습과제 2, 3

app.get('/users/:keyword', (req, res, next) => {
    const keyword = req.params.keyword
    const filtered = users.filter(user => user.name.includes(keyword))
    if(filtered.length === 0) next('route')
    else res.send(filtered)
})
app.get('/users/:keyword', (req, res, next) => {
    res.send('검색된 사용자가 없습니다.')
})


// 연습과제 4

app.post('/users', (req, res, next) => {
    users.splice(0, 0, new Object())
    res.send(`총 회원수: ${users.length}`)
})


// 연습과제 5

app.get('/users/search/:id', (req, res, next) => {
    const id = req.params.id
    if(id === 'LO6DVTZLRK68528I') next('route')
    else if(users.find(user => user.id === id)) res.send('권한이 없습니다.')
    else throw new Error('서버 오류')
})
app.get('/users/search/:id', (req, res, next) => {
    res.send('관리자 페이지 입니다.')
})

app.use(function(err, req, res, next){
    // console.log(err.stack)
    res.status(500).send('서버 오류')
})