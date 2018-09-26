// Animação ao Scroll
function ScrollInit(){

    const sectionJS = document.querySelectorAll('.js-scroll');
    // Return all of those sections.js-scroll

    if(sectionJS.length){
    // If have sections -> activate the function

    const screenH = window.innerHeight * 0.6;
    // Get the screen height, approximately a half from it.

    function sectionAnima() {

        sectionJS.forEach( (item) => {
        const sectionTop = item.getBoundingClientRect().top;
        // 'forEach' section, get the TOP distance
        const sectionVisible = (sectionTop - screenH) < 0;
        // To active the animation with the class 'active', the scroll needs to reach the scroll top value subtracting screenH, those sections gonna reach the active class without reaching just their top.

        // console.log(sectionTop);

        // For a better understanding, run without sectionVisible, and append: 'sectionTop < 0' on if()

        // console.log(sectionTop - screenH);

            if(sectionVisible){
                item.classList.add('active');
            } else{
                item.classList.remove('active');
            }
        });
    }

sectionAnima(); 
// Ativar a função sem dar o scroll, para adicionar animar a primeira section que retornou na sectionAnima()

    window.addEventListener('scroll', sectionAnima);
}

}

ScrollInit();



function menuAbsolute(){
    const menuBtn = document.querySelector('.js .btn-menu');
    const fechaBtn = document.querySelector('.js .menu-absolute .btn-menu');
    const menuAbsolute = document.querySelector('.js .menu-absolute');

    menuBtn.addEventListener('click', () => {
        menuAbsolute.classList.add('active');
    });
        
    fechaBtn.addEventListener('click', () => {
        menuAbsolute.classList.remove('active');
    });


}

menuAbsolute();