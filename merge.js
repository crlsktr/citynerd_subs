const fs = require("fs");
const videoCode = process.argv[2];
const spa = fs.readFileSync(`${videoCode}/spa.txt`,'utf-8').split('\n')
const times = fs.readFileSync(`${videoCode}/times.txt`,'utf-8').split('\n')
spa.forEach((line,index) => {
    if (!!times[index] && !!line)
    {
        console.log(index+1);
        console.log(times[index]);
        console.log(line);
        console.log();
    }
});
