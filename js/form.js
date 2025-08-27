
//class contato

class contato {
   constructor(nome, email, telefone, tipo, mensagem){
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.tipo = tipo;
    this.mensagem = mensagem;
   } 
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,            
            form.elements.namedItem("email").value,             
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipo").value,              
            form.elements.namedItem("mensagem").value);
  
       console.log("Dados do formulario:", data);
       
       alert(`Obrigado, ${data.nome}! Sua mensagem de ${data.tipo} foi enviada com sucesso.`);

      form.reset(); 
}

function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}