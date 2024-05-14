const express = require('express')
const app = express()
const port = 3000

// app.set('case sensitive routing', true)

// app.use(express.json());  

// app.get("/users", (req, res) => {
//     // 데이터베이스에서 사용자 전체목록 조회
//     res.send("all user list !")
// })
// app.post("/users", (req, res) => {
//     console.log(req.body)
//     // 데이터베이스에 새로운 사용자 생성
//     res.json(`new user - ${req.body.newUser.name} created !`)
// })
// app.put("/users/:id", (req, res) => {
//     console.log(req.body.updatedUserInfo)
//     // 데이터베이스에서 id 에 해당하는 사용자 정보 조회 후 업데이트
//     res.send(
//       `user ${req.params.id} updated with payload ${JSON.stringify(
//         req.body.updatedUserInfo
//       )}!`
//     )
// })
// app.delete("/users/:id", (req, res) => {
//     // 데이터베이스에서 id 에 해당하는 사용자 조회 후 제거
//     res.send(`user ${req.params.id} removed !`)
// })




// app.get("/users/contact", (req, res) => {
//   res.send("contact page !")
// })
// app.get("/users/city", (req, res) => {
//   res.send("city page !")
// })
// app.get("/users*", (req, res) => {
//   res.send("users wildcards !")
// })





app.get('/users/:name/comments',
    (req, res, next) => {
        if(req.params.name !== 'syleemomo'){
            res.status(401).send('you are not autorized to this page')
        }else{
            next()
        }
    },
    (req, res) => {
        res.send('this is page to update your comments')
    }
)





const blockFirstUser = (req, res, next) => {
    if(req.params.name === 'kim'){
        res.status(401).send(`${req.params.name} are not autorized to this page`)
    }else{
        next()
    }
}
const blockSecondUser = (req, res, next) => {
    if(req.params.name === 'park'){
        res.status(401).send(`${req.params.name} are not autorized to this page`)
    }else{
        next()
    }
}
const allowThisUser = (req, res) => {
    res.send('you can see this home page')
}

app.get('/home/users/:name', [
    blockFirstUser,
    blockSecondUser,
    allowThisUser
])





app.get('/chance', (req, res, next) => {
    if(Math.random() < 0.5) return next()
    res.send('first one')
})
app.get('/chance', (req, res) => {
    res.send('second one')
})





app.get('', (req, res) => {
    res.send(`특징 - 색상: ${req.query.color} / 크기: ${req.query.size}`)
})
app.get('/hello', (req, res) => {
    res.send(`<html>
                <head></head>
                <body>
                    <h1>Hello world !</h1>
                    <input type='button' value='Submit'/>
                </body>
            </html>`)
})
app.get('/google', (req, res) => {
    res.redirect('https://google.com')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
