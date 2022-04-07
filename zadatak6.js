var funkcija = require('./slucajanBroj.js');
var aPolje = [];


for(var br = 0; br <=100;br++)
{
    aPolje.push(funkcija.dajSlucajanBroj(50, 5000));
}


var brp = 0;
var brn = 0;
aPolje.forEach(function (broj)
{
    if(broj%2==0)
    {
        brp++;
    }
    else
    {
        brn++;
    }
});
console.log("Parni "+brp);
console.log("Neparni "+brn);