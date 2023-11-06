

const element = document.querySelectorAll("button")[0];
element.addEventListener("click", function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(34 34 73)";
    document.getElementsByTagName("body")[0].style.color = "white";
    document.getElementById("darkmode").style.display = "inline";
    document.getElementById("lightmode").style.display = "none";
    document.querySelectorAll("img")[6].style.border = "2px solid white";
    document.querySelectorAll("img")[2].style.backgroundColor = "white";
    document.querySelectorAll("img")[2].style.padding = "7px";
    document.querySelectorAll("img")[2].style.borderRadius = "10px";
    document.querySelectorAll("img")[3].style.backgroundColor = "white";
    document.querySelectorAll("img")[3].style.padding = "7px";
    document.querySelectorAll("img")[3].style.borderRadius = "10px"
});

const element1 = document.querySelectorAll("button")[1];
element1.addEventListener("click", function () {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
    document.getElementsByTagName("body")[0].style.color = "black";
    document.getElementById("darkmode").style.display = "none";
    document.getElementById("lightmode").style.display = "inline";
    document.querySelectorAll("img")[6].style.border = "2px solid #8a2be2";

});
document.getElementsByTagName("button")['down'].addEventListener("click", function () {
    document.getElementsByTagName("button")['up'].style.display = "block";
    document.getElementsByTagName("button")['down'].style.display = "none";
    document.getElementsByTagName("ul")[1].style.display="block";
   
   });
document.getElementsByTagName("button")['up'].addEventListener("click", function () { 
   document.getElementsByTagName("button")['up'].style.display = "none";
   document.getElementsByTagName("button")['down'].style.display = "block";
   document.getElementsByTagName("ul")[1].style.display="none";
    
});
document.getElementsByTagName("button")['down1'].addEventListener("click", function () {
     document.getElementsByTagName("button")['up1'].style.display = "block";
     document.getElementsByTagName("button")['down1'].style.display = "none";
     document.getElementsByTagName("ul")[2].style.display="block";
    
    });
document.getElementsByTagName("button")['up1'].addEventListener("click", function () { 
    document.getElementsByTagName("button")['up1'].style.display = "none";
    document.getElementsByTagName("button")['down1'].style.display = "block";
    document.getElementsByTagName("ul")[2].style.display="none";
     
});

document.getElementsByTagName("button")['down2'].addEventListener("click", function () {
    document.getElementsByTagName("button")['up2'].style.display = "block";
    document.getElementsByTagName("button")['down2'].style.display = "none";
    document.getElementsByTagName("ul")[3].style.display="block";
   
   });
document.getElementsByTagName("button")['up2'].addEventListener("click", function () { 
   document.getElementsByTagName("button")['up2'].style.display = "none";
   document.getElementsByTagName("button")['down2'].style.display = "block";
   document.getElementsByTagName("ul")[3].style.display="none";
    
});

document.getElementsByTagName("button")[10].addEventListener("click",()=>{
    document.getElementsByClassName("education")[0].style.display="flex";
    document.getElementsByClassName("work")[0].style.display="none";});

    document.getElementsByTagName("button")[11].addEventListener("click",()=>{
        document.getElementsByClassName("work")[0].style.display="flex";
        document.getElementsByClassName("education")[0].style.display="none";});

//slider
let flag=0;
function controller(x)
{
      flag=flag+x;
      showslider(flag);
}
showslider(flag);
function showslider(num){
 let slides=document.getElementsByClassName("portfilo-ele");
   if(num==slides.length)
   {
     flag=0;
     num=0;
   }
   if(num<0)
   {
    flag=slides.length-1;
    num=slides.length-1;
   }
 
 for(let y of slides){
      y.style.display="none";
  }
  slides[num].style.display="flex";
}



