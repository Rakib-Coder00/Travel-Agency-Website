// searchButton
let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})
// onScroll remove class 
window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')

    menu.classList.remove('fa-times')
    navBar.classList.remove('active')
    
    loginForm.classList.remove('active')
}

// loginForm 
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
})
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active')
})

// menuBar 
let menu = document.querySelector('#menu-bar')
let navBar = document.querySelector('.navbar')

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times')
    navBar.classList.toggle('active')
})

// videoButton
let videoBtn = document.querySelectorAll('.vid-btn')

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active')

        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src
    })
})

