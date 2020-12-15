let readlineSync = require("readline-sync");
let year = readlineSync.question("which year were you are born ?");



if(year % 4 == 0 )
{
  console.log(" It's a leap year")
} else if( year % 400 == 0 ){
  onsole.log("It's a leap year")
} else{
  console.log("It's not a leap year")
}