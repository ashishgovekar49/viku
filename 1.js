//write a program that accepts one or more numbers as  command line arguments prints the sum of those numbers to console(stdout).


var a=parseInt(process.argv[2]);
var b=parseInt(process.argv[3]);
console.log(a+b);
//argv[0]is node and argv[1]is rest in array argv[2] is argument