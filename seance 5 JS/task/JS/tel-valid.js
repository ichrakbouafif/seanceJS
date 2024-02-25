/* Examples of valid format for US phone numbers  
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555 */


str="555 555 5555";

function telephoneCheck (str) {
   str1=str.split("("," ","-").join("");
   console.log(str1);
   if (str1.lenght!=10 || str1.isNaN ){
         console.log ("Invalid phone number");
   }
   else {
    if ((str[0]=="(" && str[4]==")") ||(str[0]=="(" && str[4]==")" && str[8]=="-")
        (str[0]=="(" && str[4]==")" && str[5]==" " && str[9]=="-")||
        (str[3]=="-" && str[7]=="-")||(str[3]==" " && str[7]==" ")){

            console.log("Valid phone number");
        }
    else{
        console.log("Invalid phone number");
    }}
}

telephoneCheck (str);
