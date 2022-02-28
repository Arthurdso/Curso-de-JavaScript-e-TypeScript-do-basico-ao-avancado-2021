function meuEscopo () {

    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas')

    function criaLi() {
        const li = document.createElement('li');
        return li;
    }
    
    function criaTarefa(textoInput){
        const li = criaLi();
        li.innerText = textoInput;
        tarefas.appendChild(li);
        criaBotaoApagar(li);
    }

    function limpaImput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }

    function criaBotaoApagar(li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar'
        li.appendChild(botaoApagar);
        botaoApagar.setAttribute('class', 'apagar');
        botaoApagar.setAttribute('title', 'apagar tarefa');

    }
    
    inputTarefa.addEventListener ('keypress', function(e) {
        if (e.keyCode === 13) {
            if (!inputTarefa.value) return;
            criaTarefa(inputTarefa.value);
            limpaImput();
            salvarTarefa()            
        }
    });
    
    btnTarefa.addEventListener('click', () => {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        limpaImput();
        salvarTarefa()
    });

    document.addEventListener('click', (e) => {
        const el = e.target;

        if(el.classList.contains('apagar')) { 
            el.parentElement.remove();
            salvarTarefa()
        }
    })

    function salvarTarefa(){
        const liTarefas = document.querySelectorAll('li');
        const listaDeTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar','').trim();
            listaDeTarefas.push(tarefaTexto);
        }
        const tarefaJSON = JSON.stringify(listaDeTarefas);
        localStorage.setItem('tarefas', tarefaJSON);
    }

    function addTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);

        for (tarefa of listaDeTarefas){
            criaTarefa(tarefa)
        }
    }
    
    addTarefasSalvas()
    
}



meuEscopo();