const { helloworld, one_plus } = require("./Utils");
const fs = require('fs');

let str_log = "";

if(helloworld() === "hello world")
{

}else{
    str_log = str_log + "helloworld()\n";
    console.log(1);
    return;
}

//test case: one_plus 
if(one_plus(1) === 2) //oneplus <--- 1 ==> 2
{
    
}else{
    str_log = str_log + "one_plus():1\n";
    console.log(1);
    return;
}


if(one_plus(2) === 3) //oneplus <--- 1 ==> 2
{
    
}else{
    str_log = str_log + "one_plus():2\n";
    console.log(1);
    return;
}


fs.writeFileSync('log.txt', str_log);