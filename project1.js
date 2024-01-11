// document.getElementById("sp1").addEventListener("mouseover",function dheeraz(){
//   document.getElementById("div1").innerHTML=`<p style="color:black;background-color:rgb(20, 240, 12);margin:0px;font-size:14px;border:1px solid white;padding:5px;">Front End Training</p> 
//    <p style="background-color:rgb(20, 240, 12);color:black;margin:0px;font-size:14px;border:1px solid white;padding:5px;">Java/Python Training</p>
//     <p id="d1" style="background-color:rgb(20, 240, 12);color:black;font-size:14px;border:1px solid white;padding:5px;margin:0px;">SQL Training</p>
//     <span id="dd1"><span>`
// })
document.getElementById("sp1").addEventListener("mouseover",()=>{
  document.getElementById("div1").style.display="block";
})
document.getElementById("sp1").addEventListener("click",function sai(){
  document.getElementById("div1").style.display="none"
})


document.getElementById("d1").addEventListener("mouseover",function ok(){
 document.getElementById("dd1").style.display="block"
})
document.getElementById("d1").addEventListener("mouseout",()=>{
  document.getElementById("dd1").style.display="none"
})
document.getElementById("d2").addEventListener("mouseout",()=>{
  document.getElementById("dd2").style.display="none"
})
document.getElementById("d3").addEventListener("mouseout",()=>{
  document.getElementById("dd3").style.display="none"
})


document.getElementById("d2").addEventListener("mouseover",()=>{
  document.getElementById("dd2").style.display="block"
})

document.getElementById("d3").addEventListener("mouseover",()=>{
  document.getElementById("dd3").style.display="block"
})

document.getElementById("acc1").addEventListener("click",()=>{
  document.getElementById("icon1").style.display="block"
})

document.getElementById("acc1").addEventListener("mouseover",()=>{
  document.getElementById("icon1").style.display="none"
})

document.getElementById("x1").addEventListener("click",()=>{
  document.getElementById("yy").innerHTML=document.getElementById("x1").innerHTML
  document.getElementById("x1").innerHTML="English"
})
document.getElementById("yy").addEventListener("click",()=>{
  document.getElementById("xx").style.display="block"
})
document.getElementById("yy").addEventListener("mouseover",()=>{
  document.getElementById("xx").style.display="none"
})
document.getElementById("x2").addEventListener("click",()=>{
  document.getElementById("yy").innerHTML="Hindi"
  document.getElementById("x2").innerHTML="Telugu"
})

document.getElementById("")