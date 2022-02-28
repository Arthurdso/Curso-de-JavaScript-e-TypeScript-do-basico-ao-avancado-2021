function timer () { 
        const relogio = document.querySelector('.relogio');
        let segundos = 0;
        let timer;

        
        function pegaHora(segundos) {
            let data = new Date(segundos * 1000);

            return data.toLocaleTimeString('pt-BR', {
                hour12:false,
                timeZone: 'UTC'
            });
        }
        
        function iniciaTimer() {
                timer = setInterval(function() {
                segundos++
                relogio.innerHTML = pegaHora(segundos);
            }, 1000);
        }
        

    document.addEventListener('click', function(e) {
        const el = e.target;

        if(el.classList.contains('iniciar')){
            relogio.classList.remove('red');
            iniciaTimer();
        }

        if(el.classList.contains('pausar')){
            relogio.classList.add('red');
            clearInterval(timer);
        }

        if(el.classList.contains('zerar')){
            relogio.classList.remove('red');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}

timer();






