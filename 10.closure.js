// //closure

// console.log("x");
// var x = 10;
// console.log(x);

// console.log(b);

// function a() {
//     console.log(b);
//     var b = 20;
//     console.log(b);
// }
// a();

// const c1= counter();
// const c2= counter();


const Account = (acc_name, initial_amt) => {
    const name = acc_name;
    let balance = initial_amt;

    // deposit
    const deposit = (amt) => {
        if (amt <= 0) {
            console.log("invalid deposit amount");
            return;
        }
        balance =balance + amt;
        console.log("new balance: ",  balance);   
    }   

    // withdraw
    const withdraw = (amt) => {
        if (balance -amt <500) {
            console.log("insufficent  balance.. Available: ", balance-500);
            return;
        }
        if (amt <= 0) {
            console.log("invalid withdraw amount");
            return;
        }
        balance -= amt;
        console.log("new balance: " , balance );
    }
        

    // balance inquiry
    const balance_inq = () => {
        return balance;
    }
    return {
        deposit,
        withdraw,
        balance_inq,
    }
}  

const acc1= Account("John", 1000);
acc1.deposit(500);
acc1.withdraw(200);
acc1.withdraw(-900);
acc1.deposit(-100);
console.log("balance: ",acc1.balance_inq());

const acc2= Account("Jane", 2000);

//function factory

const outer = () => {
    let cache = {};

    return (a) => {
        if (cache[a]) {
            return cache[a];
        }

        console.log("computing...");
        for (let i = 0; i <= 1000000000; i++) {}
        cache[a] = a * a;
        return cache[a];
    };
}

const square = outer();
console.log(square(5));
console.log(square(2));