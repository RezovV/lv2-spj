var suma = 0;
var br = 0;
var i = 1;
while (br < 100)
{
        if(i % 2 != 0)
        {
            suma = suma + i;
            br++;
        }
        
    i++;

}
console.log("Suma prvih 100 neparnih brojeva: " + suma);