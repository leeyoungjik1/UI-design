const promise = new Promise(function(resolve, reject){
    setTimeout(() => resolve("완료"), 1000)
    // setTimeout(() => reject(new Error("에러 발생"), 1000))
})

// promise.then(
//     result => alert(result),
//     error => alert(error)
// )
promise
.finally(() => alert("프로미스 준비 완료"))
.then(result => alert(result))
.catch(error => alert(error))
console.log(promise)