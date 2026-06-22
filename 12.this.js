// this => object

//commonjs
//this.name="abc";
//module.exports.name="abc"; // modifyiing same object
//module.exports={name:"abc"};  //! reassign
console.log(this)

// module.exports={}
//this => {}
// module.exports={name :''}

// function a(){
//     console.log(this);
// }
// a() //? global object


// const a=() =>{
//     console.log(this);
// } ;
// a();

// object method
// const User ={
//     name:"John",
//     email:"john@email.com",
//     getName: function(){
//         console.log(this.name);
//         console.log(this)
//     },
// };
// User.getName(); //


// const User ={
//     name:"John",
//     email:"john@email.com",
//     getName: function(){
//         const b = () => {  // arrow function does not have its own this 
//         // console.log(this.name);
//         console.log(this)
//     };
//     b();
//     },
// };
// User.getName();



const User ={
    name:"John",
    email:"john@email.com",
    getName: function(){
       
        //console.log(this.name);
        console.log(this);
    
  
    },
};
//User.getName();

// // const fn = User.getName;
// // fn();  // global object


// class Student{
//     name;
//     email;
//     password;
//     constructor(name, email , password){
//         this.name=name;
//         this.email=email;
//         this.password=password;

//     }
//     getName(){
//     return this.name;
// }
// }

// const u1 = new Student("Ram","ram@gmail.com", "123456")
// const u2 = new Student("shd","shd@gmail.com","151651")
// console.log(u1.getName())
// console.log(u2.getName())


// Function object

// function introduce(){
//     console.log(this);;
// }
// introduce.age=10;
// //a();
// console.log(introduce.name);
// console.log(introduce.age);
// // introduce();


let ob = {
    c:"c",
    d:"d",
    }

let ob1 = {
    a:"a",
    b:"b",    }

//console.log(introduce.length);

// apply call and bind
function introduce(a,b){
    console.log("introduce")
    console.log(this.name,this.email,a,b);
    
    ;
}
// introduce()
introduce.call(User,12,23);// user.name
//introduce.call(ob)// ob.name

introduce.apply(User,[56,56]);

const fn=introduce.bind(User,2,2)
fn();
