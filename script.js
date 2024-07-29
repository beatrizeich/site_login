function login() {
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;
    const validadorUsuario = "usuario";
    const validadorSenha = "senha";
    
    if (usuario === validadorUsuario && senha === validadorSenha) {
        window.location.href = "login.html";
    } else {
        alert("Nome de usuário ou senha incorretos.");
    }
}