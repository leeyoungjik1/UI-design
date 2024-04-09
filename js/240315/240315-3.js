// try{

//     noSuchVariable

// }catch(err){
//     console.log(err)
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }

// try{
//     let json = '{ bad json }' 
//     let user = JSON.parse(json)
    
//     console.log(user)
// }catch(err){
//     console.log('에러')
//     console.log(err.name, err.message)
// }



// const json = '{"age": 30}'

// try{
//     const user =JSON.parse(json)
//     if(!user.name){
//         throw new SyntaxError("불완전한 데이터: 이름 없음")
//     }
//     console.log(user.name)
// }catch(e){
//     console.log(e.message)
// }
function getUserInfo(){
    "use strict"

    const json = '{ "age": 30, "name": "sunrise", "age": 200 }'

    try {
    const user = JSON.parse(json)
    if(!user.name){
        throw new TypeError("이름 없음")
    }
    if(user.age>130){
        throw new RangeError('나이 초과')
    }
    } catch(err) {
    if(err instanceof ReferenceError){
        console.log('참조에러가 발생하였습니다.', err)
    }else if(err instanceof SyntaxError){
        console.log("JSON 형식이 올바르지 않습니다.", err) 
    }else if(err instanceof TypeError){
        console.log(err.message)
    }else{
        throw err
    }
    }
}

try{
    getUserInfo()
}catch(e){
    console.log(e)
}
