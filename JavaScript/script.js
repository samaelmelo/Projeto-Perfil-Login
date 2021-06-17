function mostrarSenha(){
    const eye = document.getElementById('eye')
    const eyeSlash = document.getElementById('eye-slash')
    const fieldPassword = document.getElementById('field-password')
    
    if (eye.style.display==='none') {
        eye.style.display='block'
        eyeSlash.style.display='none'
        fieldPassword.type = 'texto'
    } else {
        eye.style.display='none'
        eyeSlash.style.display='block'
        fieldPassword.type = 'password'
    }
}

let eyeSlash = document.getElementById('eye-slash')
eyeSlash.addEventListener('click',mostrarSenha)

let eye = document.getElementById('eye')
eye.addEventListener('click',mostrarSenha)

document.getElementById('btn-login').addEventListener('click',function(e){
    e.preventDefault()
    alert('Logado!')
})