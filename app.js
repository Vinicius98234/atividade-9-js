/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/
console.log("Questão 1")
let convertToString = (value) => {
    return String(value)
  }
  const stringconvert = convertToString('carro') 
  console.log(stringconvert)
  
  /*
    02
  
    - Crie uma função que retorne a quantidade de caracteres que uma string  
      recebida por parâmetro possui.
  */
  console.log("Questão 2")
  let returncaracter = (string) => {
    return string.length
  }
  const quantcaracter = returncaracter ('Carro')
  console.log(quantcaracter)
  /*
    03
  
    - Crie uma função que retorne todos os caracteres de uma string em letras  
      minúsculas;  
    - Utilize a função para exibir a string abaixo no console.
  
    "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
  */
  console.log("Questão 3")
  let stringlow = (strlow) => strlow.toLowerCase();
  const lowercase = stringlow("CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO")
  console.log(lowercase)
  /*
    04
  
    - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
    - Ao ser invocada, a função deve retornar o index do caractere na string.
  */
  console.log("Questão 4")
  const caracstring = (caracter, string) => string.indexOf(caracter);
  const caracter = 'o';
  const string = 'carro';
  console.log(caracstring(caracter , string));  
  /*
    05
  
    - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
      passado por argumento existe no array (também passado por argumento).
  */
  console.log("Questão 5")
  const itemExiste = (noArray, item) => {
    return noArray.includes(item);
};

const array = [1, 2, 3, 4, 5];
const item = 3;
console.log(itemExiste(array, item));
  /*
    06
  
    - Crie uma função que retorna a concatenação de 2 arrays, passados como  
      argumentos em sua invocação;
  */
 console.log("Questão 6")
  const concatarray = (array1 ,array2) => array1.concat(array2);
  const exemploarray1 = [1,2,3,4,5]
  const exemploarray2 = [6,7,8,9,10] 
  resultado = concatarray(exemploarray1,exemploarray2)
  console.log(resultado)
  /*
    07
  
    - Crie uma função que retorna o array passado como argumento em sua invocação,  
      mas com o último item removido.
  */
  console.log("Questão 7")
  const removerultimoitem = (array3) => {
    return array3.slice(0,-1) ;
  }
  array3exemplo = [1,2,3,4,5]
  resultado= removerultimoitem(array3exemplo)
  console.log(resultado)
  /*
    08
  
    - Crie uma função que retorna se o valor passado como argumento em sua  
      invocação é null.
  */
  console.log("Questão 8")
  const verificarNull = valor => valor === null;
  console.log(verificarNull(null)); 
  console.log(verificarNull(5));    
  console.log(verificarNull("null")); 
  /*
    09
  
    - Crie uma função que apenas invoca uma função de callback recebida por  
      parâmetro;
    - Crie outra função que apenas exibe seu nome no console;
    - Invoque a função que recebe um callback por parâmetro, passando como  
      argumento a função que exibe seu nome no console e veja se o nome realmente  
      foi exibido.
  */
      console.log("Questão 9")
      const invocarCallback = callback => {
        callback();
      };
      
      const exibirNome = () => {
        console.log("Nome: Vinicius");
      };
      invocarCallback(exibirNome)
  /*
    10
  
    - Crie uma função que invoca uma função de callback recebida por parâmetro.  
      A invocação da função recebida por parâmetro deve receber um valor como  
      argumento;
    - Crie uma função que retorna o triplo de um número recebido por parâmetro;
    - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
      resulte no triplo de 33.
  */
      console.log("Questão 10")
      const invokeCallback = (callback, value) => callback(value);
      const triple = number => number * 3;
      const result = invokeCallback(triple, 33);
      console.log(result);
  /*
    11
  
    - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
      mensagem abaixo no console, substituindo os "X" pelas informações corretas;
    
    "O Xº item do array [X, X, X] é X."
  */
    console.log("Questão 11")
  const numbers = [1, 2, 3]
  numbers.forEach((number, index) => 
  console.log(`O ${index + 1}º item do array [${numbers}] é ${number}.`)
);
  /*
    12
  
    - Converta o for loop abaixo em um forEach;
    - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
      criada.
  */
      console.log("Questão 12")
  const letters = ['v', 'e', 'p']
  let lettersCopy = []
  
  letters.forEach(letter => lettersCopy.push(letter));
  console.log(lettersCopy)
  