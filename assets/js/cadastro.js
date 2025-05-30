// Cadastro

function validarSenhas() {
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");
    const mensagemErro = document.getElementById("mensagemErro");
    const data = document.getElementById("data").value;
    const anoNascimento = new Date(data).getFullYear();

    if (senha.value !== confirmarSenha.value) {
        mensagemErro.textContent = "As senhas não são iguais!";
        mensagemErro.style.color = "red";


        // Adiciona borda vermelha nos campos
        senha.style.border = "2px solid red";
        confirmarSenha.style.border = "2px solid red";

        // Scroll até o erro
        confirmarSenha.scrollIntoView({ behavior: "smooth", block: "center" });

        return false;
    }

    const regexSenhaSegura = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regexSenhaSegura.test(senha.value)) {
        mensagemErro.textContent = "A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.";
        mensagemErro.style.color = "red";
        document.getElementById("senha").style.border = "2px solid red";
        document.getElementById("senha").scrollIntoView({ behavior: "smooth", block: "center" });
        return false;
    }

    // Se estiver tudo certo, limpa mensagens e estilos
    mensagemErro.textContent = "";
    senha.style.border = "";
    confirmarSenha.style.border = "";
    mensagemErro.textContent = "";

    return true;
}