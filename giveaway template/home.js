const menu = document.querySelector('.menu')
const menuItems = document.querySelector('.link-container')
const cancelMenu = document.querySelector('.cancel')
menu.addEventListener('click', ()=> {
    menuItems.classList.add('active')
})
const categoryBtn = document.getElementById('category')
const categoryItems = document.querySelector('.category')
categoryBtn.addEventListener('click', ()=> {
    categoryItems.classList.toggle('active')
    const active = document.querySelector(".category.active");
    const ul = document.querySelector('ul')
    ul.classList.toggle('active')
if(active != null){
    categoryBtn.style.color = 'orangered' 
}else{
  categoryBtn.style.color = "bisque"; 
}
// if(window.innerWidth > 780){
//     ul.classList.remove("active");
// }
})
console.log(window.innerHeight)
cancelMenu.addEventListener("click", () => {
    menuItems.classList.remove("active");
    categoryItems.classList.remove("active");
});

const header = document.querySelector('.header')
let topScroll = 0
window.addEventListener('scroll', ()=> {
    let scrollTop = window.pageYOffset || document.document.documentElement.scrollTop
    if (scrollTop > topScroll) {
        header.style.opacity = "0"
    }else{
        header.style.opacity = "1";
    }
    topScroll = scrollTop
})


