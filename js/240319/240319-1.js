function Thenable(num){
    this.num = num
}
Thenable.prototype.then = function(resolve, reject){
    setTimeout(() => resolve(this.num * 2), 1000)
}

new Promise(resolve => resolve(1))
.then(result => {
    return new Thenable(result)
})
.then(alert)