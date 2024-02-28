function getCoords(elem){
    let box = elem.getBoundingClientRect()

    return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        right: box.right + window.pageXOffset
    }
}