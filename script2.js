var formInvestimento = document.querySelector(".investimento");
var formValorMedio = document.querySelector(".result-medio");
var formTaxa = document.querySelector(".taxa").value;
formTaxa = formTaxa.toString().replace(',', '.');


let paybackD = document.getElementById("btCalcular");
paybackD.addEventListener("click", function(e){
    e.preventDefault();
    var investimento = Number(formInvestimento.value);
    var valorMedio = Number(formValorMedio.value);
    var taxa = Number(formTaxa);
    console.log(investimento)
    console.log(valorMedio)
    if(valorMedio >= investimento ){
        alert("O investimento não pode ser menor que o Fluxo de caixa")
    }else{
        let cont = 1;
        while(investimento >= 0){
            investimento = investimento - (valorMedio/(Math.pow(1 + (taxa/100),cont)));
            console.log(cont);
            console.log(investimento);
            cont++;
        }
        var resultado = document.getElementById("resultado");
        var payback = cont-1;
    }

        resultado.innerHTML = `<p>O período total do retorno do investimento está estimado em ${payback.toFixed(0)} meses.</p>`;
        console.log(investimento);
        console.log(valorMedio);
        console.log(taxa);
})
