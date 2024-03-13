const testerOfGroup = 100
const testGroup = {GroupA: [] , GroupB: [], GroupC: []}
const result = {GroupA: 0, GroupB: 0, GroupC: 0}

function tester(fallAsleep, wakeup, wakeupUntillSleep, notSleep, perDelta){
  this.fallAsleep = fallAsleep
  this.wakeup = wakeup
  this.wakeupUntillSleep = wakeupUntillSleep
  this.notSleep = notSleep
  this.perDelta = perDelta
}

tester.prototype = {
  sleepSatis(){
    this.sleepSatis = this.perDelta / (this.fallAsleep * this.wakeup * this.wakeupUntillSleep * this.notSleep)
  }
}

function pickRandomNumber(min, max){
  return Math.floor( Math.random() * (max-min+1) ) + min 
}

for(let i in testGroup){
  for(let n=0; n<testerOfGroup; n++){
  const person = new tester(pickRandomNumber(1, 10), pickRandomNumber(1, 10), pickRandomNumber(1, 5), pickRandomNumber(1, 10), pickRandomNumber(0, 50))
  person.sleepSatis()
  testGroup[i].push(person)
  }
  testGroup[i].forEach(function(tester){
    if(tester.sleepSatis>0.37 && tester.sleepSatis<50){
      result[i]++
    }
  })
}


console.log(result)
console.log(testGroup)