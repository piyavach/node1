const { helloworld, one_plus } = require("./Utils");
const fs = require('fs');

let str_log = "";

if(helloworld() === "hello world")
{

}else{
    str_log = str_log + "error at helloworld():1\n";
    console.log(1);
}

//test case: one_plus 
if(one_plus(1) === 2) //oneplus <--- 1 ==> 2
{
    
}else{
    str_log = str_log + "error at one_plus():1\n";
    console.log(1);
    
}


if(one_plus(2) === 3) //oneplus <--- 1 ==> 2
{
    
}else{
    str_log = str_log + "error at one_plus():2\n";
    console.log(1);
}


fs.writeFileSync('log.txt', str_log);
return;