function validationform(){
var fname=document.validateform.fname.value;  
var lname=document.validateform.lname.value;
var city=document.validateform.city.value;  
var phn=document.validateform.phn.value;  
var add=document.validateform.add.value;    
  
if (fname==null || fname=="" ) {  
  alert("FirstName can't be blank");  
  return false;  
}
else if (lname==null || lname==""){
    alert("LastName can't be blank");
    return false; 
}
else if(city==null || city=="" ){  
  alert("Please enter a valid city");  
  return false;  
  }
  else if(phn==null || phn==""){
    alert("Please enter a valid phone number"); 
    return false; 
  }
else if(add==null || add==""){
    alert("Please enter a valid address");
    return false; 
  }  
} 
alert("Form Submitted Successfully");




