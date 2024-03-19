const metadata = {
    title: "Scratchpad",
    translations: {
      info: {
        locale: "de",
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
  for(let prop in data){
    console.log(data[prop])
    if(depth === n && findProp === prop){
      n = 1
      return data[prop]
    }else{
      if(typeof(data[prop]) === 'object' && !Array.isArray(data[prop])){
        // console.log(data[prop])
        const data2 = data[prop]
        // console.log(data2)
    //     data = data[prop]
        n++
        return findKeyOfObj(findProp, data2, depth)
        // for(let prop in data2){
        //   console.log(data2)
        // }
      }
    }
  }
}

// console.log(findKeyOfObj("title", metadata, 1))
// console.log(findKeyOfObj("title", metadata, 3))
console.log(findKeyOfObj("hour", metadata, 4))