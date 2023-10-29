const dadosFormulario = document.querySelectorAll(".input")
const clickBotao = document.querySelector('.btn-enviar')

clickBotao.addEventListener('click', (event)=> {
    event.preventDefault()

    dadosFormulario.forEach((input) => {
        if (input.value) {
            input.classList.add("campo-preenchido")
            input.classList.remove("error")
            input.nextElementSibling.classList.add("campo-obrigatorio")
        } else {
            input.classList.remove("campo-preenchido")
            input.classList.add("error")
            input.nextElementSibling.classList.remove("campo-obrigatorio")
        }
    });
})