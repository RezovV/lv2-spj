var funkcija = require('./slucajanBroj.js');



    prvi = funkcija.dajSlucajanBroj(10, 100);
    drugi = funkcija.dajSlucajanBroj(10, 100);
    treci = funkcija.dajSlucajanBroj(10, 100);


    var tekst1 = prvi.toString();
    var tekst2 = drugi.toString();
    var tekst3 = treci.toString();

    var polje1 = tekst1.split("");
    var polje2 = tekst2.split("");
    var polje3 = tekst3.split("");

    var zadnji1 = parseInt(polje1.pop());
    var zadnji2 = parseInt(polje2.pop());
    var zadnji3 = parseInt(polje3.pop());

    if(zadnji1 == zadnji2 || zadnji1 == zadnji3 || zadnji2 == zadnji3)
    {
        console.log("Prvi: "+zadnji1+", Drugi: " + zadnji2 +", Treci: "+zadnji3);
        console.log("true")
    }
    else
    {
        console.log("Prvi: "+zadnji1+", Drugi: " + zadnji2 +", Treci: "+zadnji3);
        console.log("false");
    }