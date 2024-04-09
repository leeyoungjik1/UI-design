const signDiv = document.getElementById('sign')
const sign = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const rows = sign.length
const columns = sign[0].length

function displaySign(value){
    const cellEl = document.createElement('div')
    cellEl.className = value === 0 ? 'cell' : 'cell bright'
    signDiv.appendChild(cellEl)
}


for(let i=0; i<rows; i++){
    for(let j=0; j<columns; j++){
        displaySign(sign[i][j])
    }
}