var investimento = Number(document.querySelector(".investimento").value);
var valorMedio = Number(document.querySelector(".result-medio").value);
var taxa = Number(document.querySelector(".taxa").value);


let calcular = document.getElementById("btnCalcular");
calcular.addEventListener("click", function(e){
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
        console.log(investimento, valorMedio, taxa);
})

function isNumber(valor){
    if(isNaN(valor)){
        alert("Não é numero");
        document.location.reload(true);
    }
}

