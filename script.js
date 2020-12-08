const formInvestimento = document.querySelector(".investimento");
const formValorMedio = document.querySelector(".result-medio");

let calcular = document.getElementById("btnCalcular");
calcular.addEventListener("click", function(e){
    e.preventDefault();
    if(formInvestimento.value == "" || formValorMedio.value == ""){
        alert("Algum valor não foi passado")
    }else{
        var investimento = Number(formInvestimento.value);
        var valorMedio = Number(formValorMedio.value);
        if(investimento <= valorMedio ){
            alert("O investimento não pode ser menor que o Fluxo de caixa")
        }else{
            var resultado = document.getElementById("resultado");
            var payback = investimento/valorMedio;
            isNumber(payback);
            resultado.innerHTML = `<p>O período total do retorno do investimento está estimado em ${payback.toFixed(0)} meses.</p>`
        }
    }

    function isNumber(valor){
        if(isNaN(valor)){
            alert("Não é numero");
            document.location.reload(true);
        }
    }
})