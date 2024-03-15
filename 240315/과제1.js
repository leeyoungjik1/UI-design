const comment = '너는 진짜 못말리는 바보 똥개 그지다 !'
const insults = ['바보', '똥개', '그지']

// function separateStr(str, delimeter){
//     return str.split(delimeter)    
// }
// function filterKeyword(arr, keyword){
//     return arr.filter(word => !word.includes(keyword))
// }
// let strSeparated = separateStr(comment, ' ')

// for(let insult of insults){
//     strSeparated = filterKeyword(strSeparated, insult)
// }
// console.log(strSeparated)

function filterComment(insults){
    function filterinsults(comment){
        function separateStr(str, delimeter){
            return str.split(delimeter)    
        }
        let strSeparated = separateStr(comment, ' ')
        function filterKeyword(word, keyword){
            return word.filter(word => !word.includes(keyword))
        }
        for(let insult of insults){
            strSeparated = filterKeyword(strSeparated, insult)
        }
        return strSeparated
    }
    return filterinsults
}

const filteredComment1 = filterComment(insults)
console.log(filteredComment1(comment))