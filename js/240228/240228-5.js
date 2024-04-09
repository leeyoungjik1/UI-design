const elem = document.querySelector('.coords-show-mark')

function createMessageUnder(elem, html){
    let message = document.createElement('div')
    message.style.cssText = 'position: absolute; color: red'

    let coords = elem.getBoundingClientRect()

    message.style.left = coords.left + 'px'
    message.style.top = coords.bottom + 'px'

    message.innerHTML = html
    return message
}

let message = createMessageUnder(elem, "Hello world!")
document.body.appendChild(message)
setTimeout(function(){
    message.remove()
}, 5000)