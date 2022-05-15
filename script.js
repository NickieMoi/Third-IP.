function theScore(){
    //alert("good work")

    var quiz1=document.querySelector('input[name="q1"]:checked').value;  
    var quiz2=document.querySelector('input[name="q2"]:checked').value;  
    var quiz3=document.querySelector('input[name="q3"]:checked').value;  
    var quiz4=document.querySelector('input[name="q4"]:checked').value;  
    var quiz5=document.querySelector('input[name="q5"]:checked').value;  
    var quiz6=document.querySelector('input[name="q6"]:checked').value;  
var questions=[quiz1,quiz2,quiz3,quiz4,quiz5,quiz6];
  var answers=["D","C","D","D","A","A"]; 
    var result=0;
    for (let i = 0; i < questions.length; i++) {
        
        
    }
console.log(result)
}
