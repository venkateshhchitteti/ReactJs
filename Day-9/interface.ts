interface IPerson {
    firstName:string,
    lastName:string,
     sayHi: ()=>string ; //only method signature
    }
    
    var customer: IPerson = {
         firstName: "Tom",
         lastName: "Hanks",
        sayHi: (): string => {return "Hi there"}
    }
    
    var customer: IPerson = {
         firstName: "Tom",
        lastName: "Hanks",
         sayHi: (): string => {return "Hi there"}
    }
    console.log("Customer object ")
    console.log(customer.firstName)
    console.log(customer.lastName)
    console.log(customer.sayHi())
    
    var employee:IPerson = {
        firstName:"Jim",
        lastName:"Blankes",
         sayHi: ():string =>{return "Hello!!!"}
    }
    
    console.log("Employeeb Object ")
    console.log(employee.firstName);
    console.log(employee.lastName);