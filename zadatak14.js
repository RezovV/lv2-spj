var broj = 62173092582;
if(broj > 99)
{
    var tekst = broj.toString();
    var polje = tekst.split("");
    var prvi = parseInt(polje.shift());
    var zadnji = parseInt(polje.pop());
    var zbroj = prvi + zadnji;
    console.log("prvi: " + prvi + ", zadnji: "+ zadnji+ ", zbroj: "+ zbroj);
}
