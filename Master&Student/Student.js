function StudentRegistration(){
    var uid=document.getElementById("emailid").value;
    var upass=document.getElementById("password").value;
    localStorage.setItem(uid,upass);
    alert(" student registered succesfully");
}
function Studentlogin(){
    
    var uid=document.getElementById("emailid").value;
    var upass=document.getElementById("password").value;
    var up=localStorage.getItem(uid);
    if(upass==up){
        window.location.href="StudentDashBoard.html";  
        alert("login succes"); 
        
    }
    else{
        alert("incorrect id or password");
    }

}