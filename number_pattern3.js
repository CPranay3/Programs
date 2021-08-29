
var n=3;
var d=1;
var out ="";
var c=0;

for(i=1;i<=n;i++){
    
        for (let j = 1; j <= n - i; j++) {
            out += " ";    
          }
         for (let k = 1; k <= 2 * i - 1; k++) {
            if(c==5){
                c=0;
            }
            else{
                out += d +"";
                d++
            }
            }
            out+="\n"
}
console.log(out); 
