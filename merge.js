const fs = require("fs");

const spa = fs.readFileSync("cHSCmQnGH9Q.spa.txt",'utf-8').split('\n')
const times = fs.readFileSync("cHSCmQnGH9Q.times.txt",'utf-8').split('\n')
spa.forEach((line,index) => {
    console.log(index+1);
    console.log(times[index]);
    console.log(line);
    console.log();
});
