const graph = document.getElementById('graph')
const points = []
const dx = 1
let x = 0
let y = 0
let radx = 0


function getNextPoint(){
    radx = x * (Math.PI / 180)
    y = Math.sin(radx)
    points.push([x, y])
    x += dx
}

for(let i=0; i<360; i++){
    getNextPoint()
}
console.log(points)


function displayPoint(point){
    const pointEl = document.createElement('div')
    pointEl.className = 'dot'
    pointEl.style.left = point[0]*2 + 'px'
    pointEl.style.top = (point[1]*100*-1+100) + 'px'
    graph.appendChild(pointEl)
}

points.forEach(displayPoint)