// Atividade 1 buble sort

let a = 10;
let b = 20;
let c = null;

c = a;
a = b;
b = c;
c = null;

document.write("A: " + a + '<br />')
document.write("B: " + b + '<br />')
document.write("C: " + c + '<br />')
document.write('<hr/>');


//------------------------------------------------------------------------------------------------------
// funções nativas do js
// 0123456
// Endrich
//------------------------------------------------------------------------------------------------------
//Propriedade length

document.write('endrich'.length + '<br/>');

//charAt() procura a letra e devolve sua posição

document.write('endrich'.charAt(0) + '<br/>');

//indexof() primeira ocorrencia da letra escolhida

let nome = 'Endrich'
document.write('endrich'.indexOf('e') + '<br/>');

// replace() altera uma cadeia de caractere.

document.write(nome.replace('Endrich', 'Machado' + '<br/>'))

//substr(n° de index, e quantos a frente quer pegar)

document.write(nome.substring(2, 5) + '<hr/>')

//toUpperCase() toLowerCase() e trim()
//------------------------------------------------------------------------------------------------------
//funções matematicas

let x = Math.ceil(7.360); //arredonda pra cima
document.write('valor: ' + x + '<br/>')
let y = Math.floor(7.360); //arredonda pra baixo
document.write('valor: ' + y + '<br/>')
let z = Math.round(7.360); //arredonda em vista o peso 0.5 e 0.6
document.write('valor: ' + z + '<br/>')
let k = Math.random() // valor quebrado entre 0 e 1 exemplo: 0.028648081333486175
document.write(k + '<br/>')
document.write('<hr/>')

//------------------------------------------------------------------------------------------------------
//Datas

let data = new Date();
document.write(data + '<br/>')
//(data.getmonth + 1)
document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + '<br/>');

//funções de datas

let date = new Date()
document.write(date.toDateString() + '<br/>') // formatado. dia da semana/ mes /  dia / ano.
document.write(date.toString() + '<br/>') // mais informações.
document.write('<hr/>')
date.setDate(date.getDate() + 3) // adicionando dias a mais no caso 3 dias 
document.write(date);
document.write('<hr/>')

date.setMonth(date.getMonth() + 3) // adicionando mesês a mais no caso 3 mesês 
document.write(date);
document.write('<hr/>')

date.setFullYear(date.getFullYear() + 3) // adicionando anos a mais no caso 3 anos 
document.write(date);
document.write('<hr/>')


let date1 = new Date(2017, 0, 15)

let date2 = new Date(2017, 1, 14)

document.write(date1)
document.write('<hr/>')
document.write(date2)
document.write('<hr/>')

//getTime() recupera os milisengundos da data de 1 de janeiro de 1970 até a data escolhida.
//Math.abs() retorna o valor absoluto.
let date3 = new Date();
document.write(date3.getTime())
document.write('<hr/>')

let data4 = new Date(1940, 10, 6);
document.write(data4.getTime());

let dateAtual = new Date();
document.write('<hr/>')

let dateMil = dateAtual.getTime() - data4.getTime();

document.write(Math.ceil((dateMil) / 24 / 60 / 60 / 1000))
document.write('<hr/>')

//------------------------------------------------------------------------------------------------------
//Eventos no browser(lado do cliente);
//------------------------------------------------------------------------------------------------------

//Eventos com o mouse.

//on click     -> acionado quando o elemento é clicado
//on dblclick  -> acionado quando o elemento é clicado 2 vezes
//on mouseup   -> acionado quando o clique sobre o elemento é liberado
//on mouseover -> acionado quando o cursor do mouse sobre poe sobre o elemento
//on mouseout  -> acionado quando o cursor do mouse sobre sai do elemento.
let capturaClick = document.querySelector('.container')
let trocaCor = () => {
    if (capturaClick.style.backgroundColor === 'aquamarine') {
        capturaClick.style.backgroundColor = 'black'
    } else {
        capturaClick.style.backgroundColor = 'aquamarine'
    }
}
capturaClick.addEventListener('click', trocaCor)

//------------------------------------------------------------------------------------------------------

//Eventos de teclado.

//on keydown
//on keypress
//on keyup

let capturaTecla = document.querySelector('.tecla');
let AcionarTroca = () => {
    if (capturaTecla.style.backgroundColor === 'red') {
        capturaTecla.style.backgroundColor = 'green'
    } else {
        capturaTecla.style.backgroundColor = 'red';
    }
}
capturaTecla.addEventListener('keydown', AcionarTroca)

//------------------------------------------------------------------------------------------------------

//Eventos de Janela ou frame.

//on resize -> tamanho da Janela.
//on scroll -> scroll do mouse.

let aciona = document.getElementsByTagName('body');
aciona.addEventListener('resize', () => {
    console.log('disparou o resize')
});

//------------------------------------------------------------------------------------------------------


// Eventos de Formulário

//on focus
//on blur
//on change quando estado atual é modificado.

let ganhaFoco = document.querySelector('.foco');

ganhaFoco.addEventListener('blur', () => {
    console.log('teste')
})

//------------------------------------------------------------------------------------------------------

// Document Object Model

//getElementById
//getElementsByTagName
//getElementsByClassName
//getElementsByName

const valores = document.querySelector('.entrada')

function funcValores() {
   alert('deu boa')
}
valores.addEventListener('keypress', funcValores())