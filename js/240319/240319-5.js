async function f(){
    try{
        let response = await fetch('http://유효하지 않은 주소')
    }catch(err){
        alert(err)
    }
    // const result = await Promise.reject(new Error("에러"))
    // console.log(result)
}
f()