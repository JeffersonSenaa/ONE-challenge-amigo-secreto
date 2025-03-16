let nomes = []

function adicionarAmigo() {
    try{
        let inputnome = document.getElementById("amigo").value;

        if(!inputnome.trim()){
            throw new Error("Por favor, insira um nome.")
        }
        
        nomes.push(inputnome);

        inputnome = document.getElementById("amigo").value = "";


        document.getElementById("listaAmigos").textContent = 
            `Lista de Amigos: ${nomes.join(", ")}`;


    
    }
    catch (erro){
        alert(erro.message);
    }
    
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

