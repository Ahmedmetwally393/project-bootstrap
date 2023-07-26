window.onscroll = function(){

    if(window.scrollY > 1000){
    document.querySelector('.up').classList.add('show');
}else{
    document.querySelector('.up').classList.remove('show');
}
}
document.querySelector('.up').onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
}