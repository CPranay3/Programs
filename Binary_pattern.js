
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  
  for (let k = 0; k < 2 * i - 1; k++) {
    if(k%2==0)
    {
        string += "1";
     }
    else{
        string += "0";
    }
    
  }
  string += "\n";
}
console.log(string);
