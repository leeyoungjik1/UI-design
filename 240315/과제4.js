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
    url: "/ko/docs/Tools/Scratchpad",
}

function findKeyOfObj(findProp, data, depth){
    
    for(let prop in data){
        // console.log(typeof(data[prop]))
        if(typeof(data[prop]) === 'object'){
            console.log(data[prop])
            // for(let prop in data){
            //     console.log(data[prop])
            // }
        }
        
        // if(findProp === prop){
        //     return data[prop]
        // }
    }
}

console.log(findKeyOfObj("title", metadata, 1))