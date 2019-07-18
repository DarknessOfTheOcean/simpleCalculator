//alert("parth welcomes you")

let operator=""
let op1=0
let PendingOp=""

let  NumPressed = function(num)
{
    if (myform.display.value==="")
         {
              myform.display.value=num;
         }
   else  {
              myform.display.value+=num;
         }
}
let clearDisplay=()=> myform.display.value="";

let operatinPerform= function(opt)
{
  let temp=myform.display.value;
   if(opt==="=")
   {
      if (PendingOp==="+") {
           let res=op1+parseFloat(temp);
           myform.display.value=res;
      }
      else if (PendingOp==="-") {
           let res=op1-parseFloat(temp);
           myform.display.value=res;
      }
      else if (PendingOp==="*") {
        let res=op1*parseFloat(temp);
        myform.display.value=res;
      }
      else if (PendingOp==="=") {
              myform.display.value=op1;
      }
      else {
        let res=op1/parseFloat(temp);

        myform.display.value=res;
      }
   }
   else {

         op1=parseFloat(temp);
         PendingOp=opt;
         clearDisplay();

   }
}
