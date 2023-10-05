const form = document.getElementById('form-compare');
const containerMensagemPositiva = document.querySelector('.success-message');
const containerMensagemNegativa = document.querySelector('.error-message');

form.addEventListener('submit', function(e){ 
    e.preventDefault();

    var numeroA = parseInt(document.getElementById("numero-a").value);
    var numeroB = parseInt(document.getElementById("numero-b").value);
    const mensagemPositiva = "O número B é maior que o número A";
    const mensagemNegativa = "O número B não é maior que o número A";

        if(numeroB > numeroA){            
            containerMensagemPositiva.innerHTML = mensagemPositiva;
            containerMensagemPositiva.style.display = 'block';

            containerMensagemNegativa.innerHTML = mensagemNegativa;
            containerMensagemNegativa.style.display = 'none';
            
        } else {
            containerMensagemNegativa.innerHTML = mensagemNegativa;
            containerMensagemNegativa.style.display = 'block';

            containerMensagemPositiva.innerHTML = mensagemPositiva;
            containerMensagemPositiva.style.display = 'none';
            
        }
})