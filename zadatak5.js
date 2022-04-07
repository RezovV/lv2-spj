var aPolje = [];
var aParniBrojevi = [];
for(var a = 1;aPolje.length <= 50;a++)
{
    if(a%7==0)
    {
        aPolje.push(a);
    }
}

for(var b = 1;aParniBrojevi.length <= 50;b++)
{
    if(b%2==0)
    {
        aParniBrojevi.push(b);
    }
}

aParniBrojevi.forEach(function (broj)
{
    console.log(broj);
});
