a

function MasterSignup(){
    var aid=document.getElementById("emailid").value;
    var apass=document.getElementById("password").value;
    localStorage.setItem(aid,apass);
    alert("Master registered succesfully");
    
}
function Masterlogin(){
    alert("are you sure");
    var aid=document.getElementById("emailid").value;
    var apass=document.getElementById("password").value;
    var ap=localStorage.getItem(aid);
    if(apass==ap){
       
        window.location.href="MasterDashBoard.html";  
        alert("Login Success");     
    }
    else{
        alert("incorrect id or password");
    }

}

function addquestion(){
    alert("hi");
    var q=document.getElementById("question").value;
    localStorage.setItem("q",q);
    alert("question added");
}