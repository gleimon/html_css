function valida(){
    const email = (document.getElementById('email').value)
    const mensagem = (document.getElementById('mensagem').value)    
    const padraoEmail = /^[\w.]+@[\w]+\.[\w]/gi 

    const user = email.split("@")[0] //para verificar os caracteres até o "@" (user)
    const restante_do_endereco_email = email.split("@")[1] // para verificar os caracteres após o "@" (dominio.com...)
    const dominio = restante_do_endereco_email.split(".com")[0] // para verificar os caracteres entre o "@" e o ".com" (dominio)
    
    const tamanho_user = user.length //numero de caracteres do user 
    const tamanho_dominio = dominio.length //numero de caracteres do dominio
        
    if (mensagem === ""){
        alert("Erro no envio: Insira uma mensagem")}
    else if ((padraoEmail.test(email)) && (tamanho_user <=32 && tamanho_user >=1) && (tamanho_dominio <=16 && tamanho_dominio >=1)){
        alert("Obrigado pelo contato, " +user+ "!")}
        else{
            alert("Erro no envio: Endereço de mail inválido")}
}
