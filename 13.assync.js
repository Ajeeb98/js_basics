// // synchronous programming


// // assynchronous programming
// console.log("Start");

// // setTimeout
// //setTimeout(callback,Timeout,...args)
// // const timer_id = setTimeout((a,b,c)=>{
    
// //     console.log("processing",a,b,c);
// // },
// // 2000,
// // "A",
// // "B",
// // 12,
// // );

// // const timer_id_1 = setTimeout(()=>{
    
// //     console.log("processing 1");
// // },2000);


// //console.log(timer_id);
// //console.log(timer_id._timerArgs)
// // clearTimeout(timer_id_1);
// //clearTimeout(timer_id);
// //console.log(timer_id);


// // setInterval
// // setInterval(callback,timer,...args)
// let i =0;
// const id = setInterval(()=>{
//     if(i=== 10) {
//         clearInterval(id);
//     }
//     console.log(i);
//     i++;
// },2000);

// //clearInterval(id);
// console.log("end");

//function (Total seconds)


// function countdown(totalSeconds) {
//   const timer = setInterval(() => {
//     let hrs = Math.floor(totalSeconds / 3600);
//     let mins = Math.floor((totalSeconds % 3600) / 60);
//     let secs = totalSeconds % 60;

//     if (hrs < 10) hrs = "0" + hrs;
//     if (mins < 10) mins = "0" + mins;
//     if (secs < 10) secs = "0" + secs;

//     console.log(`${hrs}:${mins}:${secs}`);

//     if (totalSeconds === 0) {
//       clearInterval(timer);
//       console.log("Time's up!");
//     }

//     totalSeconds--;
//   }, 1000);
// }

// countdown(3665);


const countdownTimer = (totalSeconds)=>{

    const intervalId = setInterval(()=>{
        totalSeconds--;
        const hoursLeft=Math.floor(totalSeconds/3600);
        const minLeft=Math.floor(totalSeconds%3600/60);
        const secLeft=totalSeconds%60;

        const formatHour = String(hoursLeft).padStart(2,"0");
        const formatMin = String(minLeft).padStart(2,"0");
        const formatSec = String(secLeft).padStart(2,"0");

        console.log(`${formatHour}:${formatMin}:${formatSec}`);

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);
};

countdownTimer(60);
