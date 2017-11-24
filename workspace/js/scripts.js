var a = 6,
	b = 2
	value;

var value = (a * a) - (2 * a * b) + (b * b);

if (value>=0) {
	console.log("wynik dodatni");
}	else if (value<0) {
	console.log("wynik ujemny");
}
switch(value) {
  case value=0:
    console.log('value ma wartosc 0');
    break;
  default:
  console.log('wartosc inna od 0');
    break;
   }