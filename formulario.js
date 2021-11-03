// jquery para setar mascara do CPF e CEP e desabilitar o botão quando carregar a pagina
$(document).ready(function($){
$("#butao").prop('disabled', true);
$("#cpf").mask('000.000.000-00', {reverse: true});
$("#cep").mask('00000-000', {reverse: true});
});
// alerta
function alertaButao(){
    alert('Formulario Validado e Enviado');
} 

// mensagem de erro no nome e validação de 10 caracteres
function validaNome(){
    var nome = document.getElementById('nome').value;
    var nomeInput = document.getElementById('nome');
    var spanNome = document.getElementById('spanNome');
    if(nome.length < 10){   
        $(nomeInput).addClass('red-border');
        spanNome.removeAttribute("hidden");
    } else{
        $(nomeInput).removeClass('red-border');
        spanNome.setAttribute("hidden", "hidden");
    }
}
// verificação para apenas letras 
function validaCaractere() {
    var nome = document.getElementById('nome');
    nome.value = nome.value.replace(/[^a-zA-Z â-ûÂ-Û]+/, '');
};

// calculo da idade(o calculo dos dias não é perfeito e as vezes pode diminuir a idade por 1) e verifica se esta vazio
function validaDate(){

    var dateInput = document.getElementById('date');
    var spanDate = document.getElementById('spanDate');
    if(dateInput.value.length == 0){
        $(dateInput).addClass('red-border');
        spanDate.removeAttribute("hidden");
        
    }else{
        $(dateInput).removeClass('red-border');
        idade.removeAttribute("hidden");
        spanDate.setAttribute("hidden", "hidden");
        var idadeValor = document.getElementById("idade").innerHTML;
        var arrayDateInput = dateInput.value.split('-')
        var nascimento = new Date(arrayDateInput[0],arrayDateInput[1]-1,arrayDateInput[2])
        var today = new Date();
        var diff = Math.floor(today.getTime() - nascimento.getTime());
        var day = 1000 * 60 * 60 * 24;
        
        var days = Math.floor(diff/day);
        var months = Math.floor(days/31);
        var years = Math.floor(months/12);
        idadeValor= "Sua idade:" + years;
        document.getElementById("idade").innerHTML= idadeValor
    }
}
// validação do cpf e se contem 11 caracteres
function onblurCpf(){

        var cpfValor = document.getElementById('cpf').value;
        var cpfInput = document.getElementById('cpf');

        cpf = cpfValor.replace(/[^0-9]/g, '');
        var cpfValido = "";
        verificador = true;
        result = parseInt(cpf[0])*10 + parseInt(cpf[1])*9 + parseInt(cpf[2])*8 + parseInt(cpf[3])*7 +  parseInt(cpf[4])*6 + parseInt(cpf[5])*5 + parseInt(cpf[6])*4 + parseInt(cpf[7])*3 + parseInt(cpf[8])*2;
        resto = (result * 10) % 11
        if (resto != cpf[9]){
            verificador = false;
        }

        for(i = 0; i < (cpf.length - 1); i++){
            if (cpf[i] == cpf[i+1]){
                verificador = false;
            }else{
                verificador = true;
            }
        }
        if(!verificador){
            $(cpfInput).addClass('red-border');
            spanCpfInvalido.removeAttribute("hidden");

        }else{
            $(cpfInput).removeClass('red-border');
            spanCpfInvalido.setAttribute("hidden", "hidden");

        }

    
}
// validação do CEP
function validaCep(){

    // var cep = document.getElementById("cep").value;
    var cepInput = document.getElementById("cep");
    var spanCep = document.getElementById('spanCep');
    if(cepInput.value.length < 7){
        $(cepInput).addClass('red-border');
        spanCep.removeAttribute("hidden");
    }else{
        $(cepInput).removeClass('red-border');
        spanCep.setAttribute("hidden", "hidden");
    }

}
// validação do endereço
function validaEndereco(){
    var endereco = document.getElementById('endereco').value;
    var enderecoInput = document.getElementById('endereco');
    var spanEndereco = document.getElementById('spanEndereco')
    if(!endereco){
        $(enderecoInput).addClass('red-border');
        spanEndereco.removeAttribute("hidden");
        
    }else{
        $(enderecoInput).removeClass('red-border');
        spanEndereco.setAttribute("hidden", "hidden");
    }
}
// botão permitindo que seja enviado o form apenas quando todas as caixas estiverem sem erro e junto do "required" no html o botão só envia o form quando tiver tudo preenchido corretamente
function verificaButao() {
   var spanNome = document.getElementById('spanNome');
   var spanDate = document.getElementById('spanDate');
   var spanCpf = document.getElementById('spanCpf');
   var spanCpfInvalido = document.getElementById('spanCpfInvalido');
   var spanCep = document.getElementById('spanCep');
   var spanEndereco = document.getElementById('spanEndereco');
   var butao = document.getElementById('butao');
    if(spanNome.hasAttribute('hidden') && spanDate.hasAttribute('hidden') && spanCpf.hasAttribute('hidden') && spanCpfInvalido.hasAttribute('hidden') && spanCep.hasAttribute('hidden') && spanEndereco.hasAttribute('hidden')){
        butao.removeAttribute("disabled");
    }else{
        butao.setAttribute("disabled", true);
    }
}
