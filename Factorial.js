
var num=parseInt(prompt('enter a number for factorial'));

var fact =1;

if(num>=0){

  for(var i=1;i<=num;i++){

    fact=fact*i;
    
    }   
  document.write(`${num}! = ${fact}`);
}
else{
    
   document.write("Enter Positive Numeric values only");
   
}

 