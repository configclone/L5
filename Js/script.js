let nenn =document.querySelector(".tab__left");
let mokuteki =document.querySelector(".tab__right");

let gazou01 =document.querySelector(".img__top__left");
let gazou02 =document.querySelector(".img__top__right");
let gazou03 =document.querySelector(".img__bottom__left");
let gazou04 =document.querySelector(".img__bottom__right");
let gazou05 =document.querySelector(".image__top__left");
let gazou06 =document.querySelector(".image__top__right");
let gazou07 =document.querySelector(".image__bottom__left");
let gazou08 =document.querySelector(".image__bottom__right");

nenn.addEventListener("click",function(){
    gazou01.style.display="block";
    gazou02.style.display="block";
    gazou03.style.display="block";
    gazou04.style.display="block";
    gazou05.style.display="none";
    gazou06.style.display="none";
    gazou07.style.display="none";
    gazou08.style.display="none";
})

mokuteki.addEventListener("click",function(){
    gazou01.style.display="none";
    gazou02.style.display="none";
    gazou03.style.display="none";
    gazou04.style.display="none";
    gazou05.style.display="block";
    gazou06.style.display="block";
    gazou07.style.display="block";
    gazou08.style.display="block";
})



let nav = document.querySelector("#navArea");

let mask = document.querySelector("#mask");

let btn = document.querySelector(".toggle-btn");

btn.onclick = ()=>{
    nav.classList.toggle("open");
}





let navAreaBotton_reason = document.querySelector(".link__top");

let navAreaBotton_course = document.querySelector(".link__middle");

let navAreaBotton_product = document.querySelector(".link__bottom");




navAreaBotton_reason.addEventListener("click",function(){
    
    navArea.style.display="none";
})



navAreaBotton_course.addEventListener("click",function(){
    
    navArea.style.display="none";
})


navAreaBotton_product.addEventListener("click",function(){
    
    navArea.style.display="none";
})