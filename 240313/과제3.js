const hairColors = ['black', 'brown', 'yellow', 'white', 'gold']
const hairTypes = ['curly', 'straight', 'wavy', 'coily']
const glasses = [true, false]
const heights = [150, 160, 170, 180, 190, 200]
const weights = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150]
const people = []
const peopleOfcnt = {}

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

const person1 = new Person(hairColors[pickRandomNumber(hairColors.length)], hairTypes[pickRandomNumber(hairTypes.length)], glasses[pickRandomNumber(glasses.length)], heights[pickRandomNumber(heights.length)], weights[pickRandomNumber(weights.length)])
const person2 = new Person(hairColors[pickRandomNumber(hairColors.length)], hairTypes[pickRandomNumber(hairTypes.length)], glasses[pickRandomNumber(glasses.length)], heights[pickRandomNumber(heights.length)], weights[pickRandomNumber(weights.length)])
const person3 = new Person(hairColors[pickRandomNumber(hairColors.length)], hairTypes[pickRandomNumber(hairTypes.length)], glasses[pickRandomNumber(glasses.length)], heights[pickRandomNumber(heights.length)], weights[pickRandomNumber(weights.length)])

people.push(person1)
people.push(person2)
people.push(person3)

people.forEach(function(person){
  for(let prop in person){
    if(peopleOfcnt[person[prop]] === undefined){
      if(person[prop] === true || person[prop] === false){
        if(person[prop]){
          person[prop] = 'put on glasses'
        }else{
          person[prop] = 'no glasses'
        }
      }
      peopleOfcnt[person[prop]] = 0
    }
    peopleOfcnt[person[prop]]++
    console.log(peopleOfcnt[person[prop]])
  }
})

console.log(people)
console.log(peopleOfcnt)


