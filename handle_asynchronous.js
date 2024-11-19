let a = 10;
let b = 0;

// setTimeout(()=>{
//     b = 30;
// }, 100)

const waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30);
    }, 1000)
})

waitingData.then((data)=>{
    console.log(a + data);
})
// console.log(a+b);