// //* global scope */
// let global_let= "global let";
// const global_const = "global const";
// var global_var = "global var";

// //* block scope */
// if (true) {
//     let block_let = "block let";
//     const block_const = "block const";
//     var block_var = "block var";    
// }
// //console.log(block_let);//! reference error: block_let is not defined
// //console.log(block_const);//! reference error: block_const is not defined
// //console.log(block_var);// block var 

// //* function scope */   
// function scope() {
//     let function_let = "function let";
//     const function_const = "function const";
//     var function_var = "function var";
//     console.log(function_let, function_const, function_var);  
// }
// scope();
// // console.log(function_let);//ReferenceError: function_let is not defined
// // console.log((function_const))//ReferenceError: function_const is not defined
// // console.log(function_var);//ReferenceError: function_var is not defined

// //* lexical scope */
// function a() {
//     let x = 10;
//     let y = 20;
//     console.log(x);
//     //console.log(z); //! reference error: z is not defined

//     function b() {
//         x=110;
//         z=55
//         console.log(x);
//         console.log(y);
//         function c() {
//             console.log(x);
//             console.log(y);
//             console.log(z);
//         }   
//         c();    
        
//     }
//     b();
      
// }
// a();


// scope chain
// let x = 10;
// function a() {
//     let y = 20;
//     console.log(x);
//     function b() {
        
//         console.log(x);
//         console.log(y);
//     }
//     b();
// }
// a();    


if (true) {
    let x = 'x';
    if (true) {
        let x=20;
        if (true) {
            console.log(x);//20
            x=40;
        }
        console.log(x);//40
    }
    console.log(x);//x
}   

//console.log(x);// global x //


