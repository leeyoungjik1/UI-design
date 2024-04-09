// try{
//     alert('try 블록시작')
//     if(confirm('에러를 만드시겠습니까?')) 이상한_코드()
// }catch(e){
//     alert('catch 블록 실행')
// }finally{
//     alert('finally 블록 마침!')
// }




// function fib(n){
//     if(n<0 || Math.trunc(n) != n){
//         throw new Error("음수나 정수가 아닌 값은 처리할 수 없습니다.")
//     }
//     return n<=1 ? n : fib(n-1) + fib(n-2)
// }
// const start = Date.now()

// try{
//     result = fib(35)
// }catch(e){
//     result = 0
// }finally{
//     diff = Date.now() - start
// }

// console.log(result || "에러발생")
// console.log(`연산시간: ${diff}ms`)





// function func(){
//     try{
//         return 1
//     }catch(e){

//     }finally{
//         alert('finally')
//     }
// }

// alert(func())



function loadScript(src, callback) {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => callback(null, script)
    script.onerror = () => callback(new Error(`${scr} 파일을 로딩하는 중에 에러가 발생하였습니다.`))
    document.head.append(script)
}
loadScript('script.js', function(error, script){
    if(error){
        alert(error)
    }else{
        loadend()
        loadScript('main.js', function(error, script){
            if(error){
                alert(error)
            }else{
                executeMain()
                loadScript('build.js', function(error, script){
                    if(error){
                        alert(error)
                    }else{
                        buildSomething()
                    }
                })
            }
        })
    }
    // console.log(script)
    // loadend()
    // loadScript('main.js', function(){
    //     executeMain()
    //     loadScript('build.js', function(){
    //         buildSomething()
    //     })
    // })
})