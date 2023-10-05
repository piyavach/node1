const fs = require('fs');

const { helloworld, one_plus } = require("./Utils");

let str = "";
let is_error = 0;

if(helloworld() === "hello world")
{

}else{
    str = str + "error at: helloworld(): at 1\n";
    is_error = 1;
}

//test case: one_plus 
if(one_plus(1) === 2) //oneplus <--- 1 ==> 2
{
    
}else{
    str = str + "error at: one_plus(1): at 1\n";
    is_error = 1;
}


if(one_plus(2) === 3) //oneplus <--- 1 ==> 2
{
    
}else{
    str = str + "error at: one_plus(2): at 2\n";
    is_error = 1;
}


fs.writeFileSync('log.txt', str);
console.log(is_error);