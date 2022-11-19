// Đóng mở các form
const loginBtn = document.querySelector('.js-login')
const signIn = document.querySelector('.js-sign-in')
const signInContainer = document.querySelector('.js-signin-container')
const signInClose = document.querySelector('.js-signin-close')

const registerBtn = document.querySelector('.js-register')
const signUp = document.querySelector('.js-sign-up')
const signUpContainer = document.querySelector('.js-sign-up-container')
const signUpClose = document.querySelector('.js-signup-close')


//hàm mở các form
function showSignIn() {
    signIn.classList.add('open')
}
function showSignUp() {
    signUp.classList.add('open')
}

//hàm đóng các form
function hideSignIn() {
    signIn.classList.remove('open')
}
function hideSignUp() {
    signUp.classList.remove('open')
}

// Nghe hành vi click
//sign-in
loginBtn.addEventListener('click', showSignIn)
signInClose.addEventListener('click', hideSignIn)
signIn.addEventListener('click', hideSignIn)
signInContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

//sign-up
registerBtn.addEventListener('click', showSignUp)
signUpClose.addEventListener('click', hideSignUp)
signUp.addEventListener('click', hideSignUp)
signUpContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})


