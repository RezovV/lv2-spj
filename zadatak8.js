var funkcija = require('./slucajanBroj.js');
var aBrojevi = [];

for(var a = 0;aBrojevi.length <=49;a++)
{
    aBrojevi.push(funkcija.dajSlucajanBroj(1, 20));
}
for(var i = 1; i < i <=20;i++)
{
    if(aBrojevi.indexOf(i) > -1)
    {
        console.log(i);
    }
}