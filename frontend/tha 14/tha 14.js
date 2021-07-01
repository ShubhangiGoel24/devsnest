function toggleHide(){
    let btn=document.getElementById("btn");
    let para=document.getElementById("para");
    if(para.style.display!="none"){
        para.style.display="none";
    }
    else{
        para.style.display="block";
    }
}
function red(){
    let heading=document.getElementById("heading");
    heading.style.color="red";
}
function colorGreen(){
    let heading=document.getElementById("heading");
    heading.style.color="green";
}