const form = document.getElementById("form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const telefoneUser = document.getElementById("telefone");
const messageUser = document.getElementById("mensagem");

const inputText = document.querySelectorAll(".input");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    verifyInput();
    emailInput();
    telefoneInput();
    messageInput();
})

inputText.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value !== "") {
            input.classList.add("campo-preenchido")
        } else {
            input.classList.remove("campo-preenchido")
        }
    });
});

function verifyInput() {
    const userNameValue = userName.value;

    if (userNameValue == "") {
        errorInput(userName, "campo obrigatório")
    } else {
        const formItem = userName.parentElement;
        formItem.className = "form-content"
    }
}

function emailInput() {
    const emailValue = userEmail.value;

    if (emailValue == "") {
        errorInput(userEmail, "campo obrigatório")
    } else {
        const formItem = userEmail.parentElement;
        formItem.className = "form-content"
    }
}

function telefoneInput() {
    const telefoneValue = telefoneUser.value;

    if (telefoneValue == "") {
        errorInput(telefoneUser, "campo obrigatório")
    } else {
        const formItem = telefoneUser.parentElement;
        formItem.className = "form-content"
    }
}

function messageInput() {
    const messageValue = messageUser.value;

    if (messageValue == "") {
        errorInput(messageUser, "campo obrigatório")
    } else {
        const formItem = messageUser.parentElement;
        formItem.className = "form-content"
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector(".error-message")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

userEmail.addEventListener("blur", () => {
    emailInput();
})


userName.addEventListener("blur", () => {
    verifyInput();
})

telefoneUser.addEventListener("blur", () => {
    telefoneInput();
})

messageUser.addEventListener("blur", () => {
    messageInput();
})