function rows(num){

for(i=1;i<num;i++)
{ 
    var s="";
    k=i;
    for(j=1;j<=i;j++)
    {   
         s += k+' ' ;
         k+=4-j;
   }
   console.log(s);
  
}
}
rows(5)

