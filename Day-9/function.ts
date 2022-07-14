function display(s1:string):void;
function display(n1:number,s1:string):void;

function display(x:any,y?:any):void  {
    console.log(x);
    console.log(y);
}
display("abc")
display(1,"xyz");