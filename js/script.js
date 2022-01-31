const navbar = document.getElementById('navigate')

window.addEventListener('scroll', function(){
    scrollposition = window.scrollY;

    if(scrollposition >= 60){
        navigate.classList.add('navbg');
    } else if (scrollposition <= 60) {
        navigate.classList.remove('navbg')
    }
})