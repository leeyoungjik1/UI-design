// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000) 
// }).then(function(result) { 
//     alert(result)
//     return result * 2
// }).then(function(result){
//     alert(result)
//     return result * 2
// }).then(function(result){
//     alert(result)
//     return result * 2
// })




// new Promise(function(resolve, reject) {
//     setTimeout(() => resolve(1), 1000) 
// }).then(function(result){
//     alert(result)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result*2), 2000)
//     })
// }).then(function(result){
//     alert(result)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(result*2), 3000)
//     })
// }).then(function(result){
//     alert(result)
// })

// function loadScript(src) {
//     return new Promise(function(resolve, reject) {
//       let script = document.createElement('script')
//       script.src = src
  
//       script.onload = () => resolve(script)
//       script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`))
  
//       document.head.append(script)
//     })
//   }

// loadScript("script.js")
// .then(function(script){
//     return loadScript("main.js")
// })
// .then(function(script){
//     return loadScript("build.js")
// })
// .then(function(script){
//     loadend(),
//     executeMain(),
//     buildSomething()
// })






function loadScript(src) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script')
      script.src = src
  
      script.onload = () => resolve(script)
      script.onerror = () => reject(new Error(`${src}를 불러오는 도중에 에러가 발생함`))
  
      document.head.append(script)
    })
  }
  
  loadScript("script.js").then(script1 => {
    loadScript("main.js").then(script2 => {
      loadScript("build.js").then(script3 => {
        loadend()
        executeMain()
        buildSomething()
        console.log(script1, script2, script3)
      })
    })
  })