const metadata = {
    title: "Scratchpad",
    translations: {
      info: {
        locale: {name: "de"},
        localization_tags: [],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
        time: {
          hour: 4
        }
      },
    },
    time: {
      hour: 4
    },
    url: "/ko/docs/Tools/Scratchpad",
}

let n = 1
function findKeyOfObj(findProp, data, depth){
  console.log(n)
  for(let prop in data){
    if(depth === n && findProp === prop){
      n--
      return data[prop]
    }else{
      if(typeof(data[prop]) === 'object' && !Array.isArray(data[prop])){
        data = data[prop]
        n++
        return findKeyOfObj(findProp, data, depth)
      }
    }
  }
}

console.log(findKeyOfObj("title", metadata, 1))
console.log(findKeyOfObj("title", metadata, 3))
console.log(findKeyOfObj("hour", metadata, 4))