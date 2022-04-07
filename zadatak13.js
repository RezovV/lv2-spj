var funkcija = require('./slucajanBroj.js');
var aBrojevi = [];

for(var a = 0;aBrojevi.length <=30;a++)
{
    aBrojevi.push(funkcija.dajSlucajanBroj(150, 1500));
}


var provjera;

function sortiraj(polje)
{
    provjera = false;
    var kraj = polje.length - 1;
    for(var i = 0; i < kraj; i++)
    {
        if(polje[i] > polje[i+1])
        {
            provjera = true;
            var nova = polje[i];
            polje[i] = polje[i +1];
            polje[i + 1]= nova;
        }
    }
    kraj--;
}
do{
    sortiraj(aBrojevi);
}
while(provjera);
console.log(aBrojevi);

