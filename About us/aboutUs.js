const burgerButton = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.burger__menu')

const onPress = () => {
    burgerMenu.classList.toggle('active')
    burgerButton.classList.toggle('active')
}