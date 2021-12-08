
 var yes = function(n){
    var a = [1 ,4, 5, 9, 10, 40, 50, 90,100]
    var b =["I","IV","V","IX","X","XL","L","XC","C"]
   var rom = ``;
for(var i=a.length-1; i>=0; i--)
{
   while(a[i] <= n)
    {
        rom += b[i];
        n =n - a[i]; 
    }
       
}
return rom;
}
console.log(yes(55));