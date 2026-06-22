//! event loop

//? 1..callstack
//? 2..web apis: timer[setTimeout, interval...], dom events, promises:{onResolve:(){},onReject:(){},finally:(){}}, fetch, geo location
//? 3.task queue -> fifo
//*    a. macro task queue 4 // callback queue ->> last
//*    b. micro task queue  -> 1st priority
//? 4. event loop

console.log("start");
setTimeout(() => {
    console.log("processing 1 ");

},2000);

// fetchPosts(1)
//     .then((posts)=> {
//         console.log(posts);
//     })
//     .catch((err)=> {
//         console.log(err);
//     })

console.log("end");