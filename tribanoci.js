function input(num){
var a=0,b=0,c=1;
var s;
console.log(a);
console.log(b);
console.log(c);

for(i=1;i<num;i++)
{
    s=a+b+c;
    console.log(s);
    a=b;
    b=c;
    c=s;
}
}
input(3);
