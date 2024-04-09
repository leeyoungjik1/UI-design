const dotStr = '…'

function truncate(str, maxlength){
    // console.log(str)
    if(str.length > maxlength){
        return str.slice(0, maxlength-1) + dotStr
    }
    return str
}


// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

// truncate("Hi everyone!", 20) = "Hi everyone!"

console.log(truncate("What I'd like to tell on this topic is:", 20))

console.log(truncate("Hi everyone!", 20))

