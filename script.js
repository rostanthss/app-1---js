function calcular(tipo,valor){
    
    switch (tipo) {
        case 'acao':
            switch (valor) {
                case 'c':
                    document.getElementById('visor').value = ''
                    break;
            
                case '+':
                case '-':
                case '*':
                case '/':
                    document.getElementById('visor').value +=  valor
                    break;
                case '=':
                    document.getElementById('visor').value = eval(document.getElementById('visor').value)
            }
            break;
    
        case 'valor':
            document.getElementById('visor').value +=  valor
            break;
    }
}