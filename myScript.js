let dice = 1;
switch (dice)
{
    case 1:
        console.log("Dice is rolled to one");
        break;
    case 2:
        console.log("Dice is rolled to Two");
        break;
     case 3:
        console.log("Dice is rolled to Three");
        break;
    default:
        console.log("Dice is not rolled");
}
/* ==>Print 1-10 <== */

/* for (let i = 1; i <=10; i++)
{
    console.log(i);
}
 */
/* let i = 1;
while (i <= 10)
{
    console.log(i);
    i++;
}
 */

/* ==> Even and odd numbers <==

let n = 8;
if (n%2==0) {
    console.log(n + " Is a Even number");
}
else if(n%2!==0)
{
    console.log(n + " Is a odd number");
}
else {
    console.log(n + " Is Neither even nor a odd number");
}
 */

let string = "APPLE";

for (let i = string.length - 1; i >= 0; i--)
{
    console.log(string[i]);
}