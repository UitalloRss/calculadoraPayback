const formInvestimento = document.querySelector(".investimento");
const formValorMedio = document.querySelector(".result-medio");
const formTaxa = document.querySelector(".taxa");


let paybackD = document.getElementById("btCalcular");
paybackD.addEventListener("click", function(e){
    var investimento = Number(formInvestimento.value);
    var valorMedio = Number(formValorMedio.value);
    var taxa = Number(formTaxa.value);
    e.preventDefault();
        let cont = 1;
        while(investimento >= 0){
            investimento = investimento - (valorMedio/(Math.pow(1 + (taxa/100),cont)));
            console.log(cont);
            console.log(investimento);
            cont++;
        }
        var resultado = document.getElementById("resultado");
        var payback = cont-1;
        resultado.innerHTML = `<p>O período total do retorno do investimento está estimado em ${payback.toFixed(0)} meses.</p>`;
        console.log(investimento);
        console.log(valorMedio);
        console.log(taxa);
})
