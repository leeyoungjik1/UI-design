const photo = document.querySelector('.photo')
const promise = new Promise(function(resolve, reject){
    photo.style.backgroundColor = 'green'
    setTimeout(() => resolve(), 2000)
})
promise.then(function(){
    photo.style.backgroundColor = 'red'
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(), 2000)
    })
})
.then(function(){
    photo.style.display = 'none'
    return new Promise(function(resolve, reject){
        setTimeout(() => resolve(), 100)
    })
}).then(function(){
    alert('두번째 사진 사라짐')
})
console.log(promise)