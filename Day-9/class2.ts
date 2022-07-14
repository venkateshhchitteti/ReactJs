class Account{
    constructor(amount:number){
        this.amount = amount;
    }
    amount:number = 0;
    name:string;
    openingDate:Date;
}
const account1 :Account = new Account(100);
console.log(account1.amount);
let date: Date = new Date();  
console.log("Date = " + date);