function loadScript(src) {
    return new Promise(function(resolve, reject){
        let script = document.createElement('script')
        script.src = src
      
        script.onload = () => resolve(script)
        script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`))
      
        document.head.append(script)
    })
}

const promise = loadScript('script.js')
promise.then(script => console.log(`${script.src} 로딩 성공`))
promise.catch(error => console.log(error))

promise.then(script => console.log("두번째 처리"))

promise.then(script => console.log("세번째 처리"))