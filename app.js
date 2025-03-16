function adicionarAmigo() {
    try{
        //Salva nomes no Array
        let nomes = []

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
