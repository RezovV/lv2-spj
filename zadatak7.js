var funkcija = require('./slucajanBroj.js');
var aBrojevi = [];

for(var a = 0;aBrojevi.length <=200;a++)
{
    aBrojevi.push(funkcija.dajSlucajanBroj(150, 1500));
}


var min = 149;
var max = 1500;
aBrojevi.forEach(function (broj)
{
    if(broj > min)
    {
        min = broj;
    }
    
});
aBrojevi.forEach(function (broj)
{
    if(broj < max)
    {
        max = broj;
    }
    
});

console.log("Najveci " +min);
console.log("Najmanji " +max);