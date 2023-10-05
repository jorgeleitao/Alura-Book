async function buscaEndereco(cep){
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let consultaCEPConvertida = await consultaCEP.json();
    if(consultaCEPConvertida.erro){
        throw Error('CEP não existente')
    }
    const cidade = document.getElementById('cidade');
    const logradouro = document.getElementById('endereco');
    const estado = document.getElementById('estado');


    cidade.value = consultaCEPConvertida.localidade;
    logradouro.valu = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;


    console.log(consultaCEPConvertida);
    return consultaCEPConvertida;

    }catch(erro){
        mensagemErro.innerHTML = "<p> CEP INVÁLIDO. Tente novamente. </p>"
        console.log(erro)
    }
    
}

const cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

