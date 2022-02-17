var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


const MenuBurger = document.querySelector(".menu-burger");
const MenuList = document.querySelector(".menu-list");
const ListElement = document.querySelectorAll("a[name='list-elm']");
const NavBar = document.querySelector("nav");



document.addEventListener("scroll" ,()=>{
    if(window.scrollY >= 40){
        NavBar.classList.add("sticky");
    }
    else{
        NavBar.classList.remove("sticky");
    }
})

MenuBurger.addEventListener("click" , ()=>{
    MenuList.classList.toggle("active");
    MenuBurger.classList.toggle("active");
})
ListElement.forEach(a => {
    a.addEventListener("click" , ()=>{
    MenuList.classList.remove("active");
    MenuBurger.classList.remove("active");
})
});
