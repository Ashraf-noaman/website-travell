AOS.init({
    duration: 800,
    offset:150,
});
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active')
}
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = ()=>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})


window.addEventListener('load',()=>{
    setTimeout(function(){
        const preload = document.querySelector('.preload')
        const header = document.querySelector('.header')
        preload.classList.add('preload-finish')
        header.classList.add('header-fixed')
        
    },2000)

})


