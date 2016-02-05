// Write a JavaScript program to get the current date.

var today = new Date();  
var dd = today.getDate();  
//The value returned by getMonth is an integer between 0 and 11, referring 0 to January, 1 to February, and so on.  
var mm = today.getMonth()+1;   
var yyyy = today.getFullYear();  
if(dd<10)   
{  
    dd='0'+dd;  
}   
  
if(mm<10)   
{  
    mm='0'+mm;  
}   
today = mm+'-'+dd+'-'+yyyy;  
alert(today);  
today = mm+'/'+dd+'/'+yyyy;  
alert(today);  
today = dd+'-'+mm+'-'+yyyy;  
alert(today);  
today = dd+'/'+mm+'/'+yyyy;  
alert(today);  