// var val=document.getElementById("ans");
function a(v) {
    form1.ans.value+=v;
}
function clr(){
    form1.ans.value='';
}

VanillaTilt.init(document.querySelector(".container"),{
    max: 10,
    speed: 400,
    glare: true,
    "max-glare":0.3
});