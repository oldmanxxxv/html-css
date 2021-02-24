var date = new Date();

var hour = date.getHours();

if (hour < 11) {
    document.write("<h2>Buna dimineata!</h2>");

}else if(hour < 18){
    document.write("<h2>Buna ziua!</h2>");
}
else {
    document.write("<h2>Buna seara!</h2>");
}

var money = 5;
var chocolate = 0;
var chocolatePrice = 1;

do {

chocolate++;
money -= chocolatePrice;

} while (money >= chocolatePrice)

document.write("I have " + chocolate + " chocolates");