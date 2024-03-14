const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
const people = []
const peopleOfCnt = {}
const numOfPeople = 10000

function Person(hairColor, hairType, glasses, height, weight){
  this.hairColor = hairColor
  this.hairType = hairType
  this.glasses = glasses
  this.height = height
  this.weight = weight
}

function pickRandomNumber(length){
  return Math.floor( Math.random() * length)
}


for(let n=0; n<numOfPeople; n++){
  const person = new Person(hairColors[pickRandomNumber(hairColors.length)], hairTypes[pickRandomNumber(hairTypes.length)], glasses[pickRandomNumber(glasses.length)], heights[pickRandomNumber(heights.length)], weights[pickRandomNumber(weights.length)])
  people.push(person)
}

function setGlasses(person){
  if(person.glasses){
    person.glasses = 'put on glasses'
  }else{
    person.glasses = 'no glasses'
  }
}
function setheigth(person){
  if(person.height){
    person.height += 'cm'
  }
}
function setweight(person){
  if(person.weight){
    person.weight += 'kg'
  }
}

people.forEach(function(person){
  setGlasses(person)
  setheigth(person)
  setweight(person)
  for(let prop in person){
    if(peopleOfCnt[person[prop]] === undefined){
      peopleOfCnt[person[prop]] = 0
    }
    peopleOfCnt[person[prop]]++
  }
})

const container = document.getElementById('container')

for(let prop in peopleOfCnt){
  const dataDiv = document.createElement('div')
  dataDiv.className = 'data'
  const dataH1 = document.createElement('h1')
  dataH1.innerText = prop
  const dataP = document.createElement('p')
  dataP.innerText = peopleOfCnt[prop]

  dataDiv.appendChild(dataP)
  dataDiv.appendChild(dataH1)
  container.appendChild(dataDiv)
}



console.log(people)
console.log(peopleOfCnt)


