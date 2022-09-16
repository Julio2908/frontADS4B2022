function Enviar() { 
    var nome = document.getElementById("nomeid");
    var fone = document.getElementById("foneid");
    var email = document.getElementById("emailid");

    if(nome.value != "" && fone.value != "" && email.value != "") { 
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso'); 
    }
}
function Dados() { 
    var nome = document.getElementById("nomeid");
    var fone = document.getElementById("foneid");
    var email = document.getElementById("emailid");

    if(nome.value != "" && fone.value != "" && email.value != "") { 
        alert('-- Dados informados --\nNome: ' + nome.value + '\nFone: ' + fone.value + '\nEmail: ' + email.value); 
    }
}