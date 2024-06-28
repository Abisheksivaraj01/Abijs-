let userCheck=()=>{
        let user= document.getElementById("usn").value
          let spaa  =  document.getElementById("spn")   

if(user !=""){
   spaa.innerHTML="ok done";
  spaa.style.color="green";
}
else{
   spaa.innerHTML="enter ur nme";
    spaa.style.color="red";
}
}
document.getElementById("usn").addEventListener("keyup",userCheck);