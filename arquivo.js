const form = document.getElementById("valid-form");
let numeroA = parseFloat(document.getElementById("nA").value);
let numeroB = parseFloat(document.getElementById("nB").value);

formValid = false;

function numberValid (numeroA, numeroB){
    return numeroB > numeroA    
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    formValid = numberValid(numeroA, numeroB)

    if (formValid){
        alert("Formulário validado com sucesso!")
    }else{
        alert("Erro")
    }
})
