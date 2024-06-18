const menubtn = document.getElementById('menu-btn')
const sidemenu = document.querySelector('aside')
const closebtn = document.getElementById('close-btn')
const darkmode = document.querySelector('.dark-mode')

menubtn.addEventListener( 'click' , () => {
    sidemenu.classList = "open_sidemenu"
})
closebtn.addEventListener( 'click' , () => {
    sidemenu.classList = "close_sidemenu"
})

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkmode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkmode.querySelector('span:nth-child(2)').classList.toggle('active');
})




