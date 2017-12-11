var logado = localStorage.getItem("logado");

if (logado == "false") {
    window.location="login.html";
}

function sair(){
    localStorage.setItem("logado", false);
    window.location="login.html";
}
