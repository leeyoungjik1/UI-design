// *** 연습과제 1

// let i = 7;

// while (i) {
//   alert( i-- );
// }
// // 1


// *** 연습과제 2

// let i = 0;
// // // while (++i < 5) console.log( i );
// // // 1,2,3,4


// // while(++i<5){
// //     console.log(i)
// // }

// if(++i<5){
//     console.log(i)
//     if(++i<5){
//         console.log(i)
//         if(++i<5){
//             console.log(i)   
//             if(++i<5){
//                 console.log(i)        
//                 if(++i<5){
//                     console.log(i)           
//                     if(++i<5){
//                         console.log(i)                
//                     }
//                 }
//             }
//         }
//     }
// }


// *** 연습과제 3

// let i = 0;
// // while (i++ < 5) console.log( i );
// // //1,2,3,4,5

// while(i++<5){
//     console.log(i)
// }

// if(i++<5){
//     console.log(i) 
//     if(i++<5){
//         console.log(i)
//         if(i++<5){
//             console.log(i)
//             if(i++<5){
//                 console.log(i)
//                 if(i++<5){
//                     console.log(i)
//                     if(i++<5){
//                         console.log(i)
//                     }
//                 }
//             }
//         }
//     }
// }


// *** 연습과제 4

// for (let i = 0; i < 5; i++) console.log( i );
//0,1,2,3,4

// let i = 0
// if(i<5){
//     console.log(i)
//     i++
//     if(i<5){
//         console.log(i)
//         i++
//         if(i<5){
//             console.log(i)
//             i++
//             if(i<5){
//                 console.log(i)
//                 i++
//                 if(i<5){
//                     console.log(i)
//                     i++
//                     if(i<5){
//                         console.log(i)
//                         i++
//                         if(i<5){
//                             console.log(i)
//                             i++
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }



// *** 연습과제 5

// for (let i = 0; i < 5; ++i) console.log( i );
//0,1,2,3,4

// let i = 0
// if(i<5){
//     console.log(i)
//     i++
//     if(i<5){
//         console.log(i)
//         i++
//         if(i<5){
//             console.log(i)
//             i++
//             if(i<5){
//                 console.log(i)
//                 i++
//                 if(i<5){
//                     console.log(i)
//                     i++
//                     if(i<5){
//                         console.log(i)
//                         i++
//                         if(i<5){
//                             console.log(i)
//                             i++
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }


// *** 연습과제 6

while(true){
    let n = prompt('숫자를 입력하세요.')
    if(n>1){
        for(let i=n; i<=n; i=i-1){
            if(i%2===0) continue;
            if(i<1) break;
            console.log(i)
        }
        break
    }else if(!n) break;
    alert('1보다 큰 숫자를 입력해주세요.')
}


// *** 연습과제 7

while(true){
    let n = prompt('숫자를 입력하세요.')
    if(n>2){
        for(let i=n; i<=n; i=i-1){
            if(i%(i-1)!==0 && i%(i-2)!==0 && i%(i-3)!==0) continue;
            if(i<1) break;
            console.log(i)
        }
        break
    }else if(!n) break;
    alert('1보다 큰 숫자를 입력해주세요.')
}

// 5%1=0 5%2=1 5%3=2 5%4=1 5%5=0
// 9%1=0 9%2=1 9%3=0 9%4=0 9%5=4 

// 소수 = n%(n-1), n%(n-2), n%(n-3), n%(n-4) ... n%2 0이 나오지 않는





// if(i%(i-1)!==0 && i%(i-2)!==0 && i%(i-3)!==0 ... i%2!==0)
for(let i=n; i<=n; i=i-1){
    let k = i%(i-m)
    for(let k = i%(i-m); (i-m)>=2; m=m-1){
        
    }
    if(k==0) continue;
    if(i<1) break;
    console.log(i)
}

while(i%(i-j)!==0){
    --j
}



let k = 8%(8-m)
for(let k = 8%(8-m); (8-m)>=2; m=m-1){
    
}

m=i-1

m<i
let m = i-1; (i-m)>=2; m=m-1