async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료"), 1000)
    })
    console.log(promise)
    let result = await promise
    alert(result)
}
// console.log(f())

f()