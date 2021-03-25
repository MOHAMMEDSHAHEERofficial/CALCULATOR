var Math = +prompt("Enter your MATH Marks out of 100")
var physics = +prompt("Enter your PHYSICS Marks out of 100")
var  Addmath= +prompt("Enter your ADDMATHS Marks out of 100")
var  chemistry= +prompt("Enter your CHEMISTRY Marks out of 100")
var computer=+prompt("Enter your COMPUTER mark out of 100")
var total = (Math+physics+Addmath+chemistry+computer)
document.write(" Your Maths MArks is" +""+ Math + "<br>");
document.write(" Your Physics MArks is" +""+ physics + "<br>");
document.write(" Your Addmaths MArks is" +""+ Addmath + "<br>");
document.write(" Your chemistry MArks is" +""+ chemistry + "<br>");
document.write(" Your Computer MArks is" +""+ computer + "<br>");
document.write("Your Total  Marks is"+ "" + total+ "<br>")
var per = (total/500*100)
document.write("Your Percentage is "+per+"<br>")
if(total ==500){
    alert("Grade is A*")
      document.write("Your Grade is A*")
}
else if(total >=420){
      alert("Grade is A")
      document.write("Your Grade is A")
}
else if(total >=350){
    alert("Grade is B")
    document.write("Your Grade is B")
}
else if(total >=300){
     alert("Grade is C")
     document.write("Your Grade is C")
}
else if(total >=300){
    alert("Grade is D")
    document.write("Your Grade is D")
}
else{
      alert("fail")
      document.write("your score is not enough")
}



