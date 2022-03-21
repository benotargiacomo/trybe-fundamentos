// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  } 
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}

// Desafio 3
function splitSentence(string) {
  const array = string.slice().split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = 0;
  totalPoints = wins*3 + ties;
  return totalPoints
}

// Desafio 6
function highestCount(array) {
  let contagemRepeticao = 0;
  let maiorNumero = Math.max.apply(null, array);
    for (let i in array) {
      if (maiorNumero === array[i]) {
        contagemRepeticao += 1;
      }
    }
  return contagemRepeticao;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2){
  let info = [mouse, cat1 - mouse, cat2 - mouse];
  for (let i in info){
    if (info[i] < 0) {
      info[i] = Math.abs(info[i]);
    }
  }
  if(info[1] < info[2]){
    return "cat1";
  } else if (info[2] < info[1]){
    return "cat2";
  } else if (info[1] === info[2]){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  for(let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0){
      array[i] = 'buzz';
    } else if (array[i] % 3 === 0 && array[i] % 5 !== 0){
      array[i] = 'fizz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string){
  let vogal = ['a','e','i','o','u'];
  let numero = [1, 2, 3, 4, 5];
    for (let i in string){
      if(string[i] === vogal[0]){
        string = string.replace(string[i],numero[0]);
      } else if (string[i] === vogal[1]){
        string = string.replace(string[i],numero[1]);
      } else if (string[i] === vogal[2]){
        string = string.replace(string[i],numero[2]);
      } else if (string[i] === vogal[3]){
        string = string.replace(string[i],numero[3]);
      } else if (string[i] === vogal[4]){
        string = string.replace(string[i],numero[4]);
      }
    }
  return string;
}

function decode(string) {
  let vogal = ['a','e','i','o','u'];
  let numero = [1,2,3,4, 5];
  for (let i in string) {
    if (string[i] == numero[0]) {
    string = string.replace(string[i], vogal[0]);
    } else if (string[i] == numero[1]) {
    string = string.replace(string[i], vogal[1]);
    } else if (string[i] == numero[2]) {
    string = string.replace(string[i], vogal[2]);
    } else if (string[i] == numero[3]) {
    string = string.replace(string[i], vogal[3]);
    } else if (string[i] == numero[4]) {
    string = string.replace(string[i], vogal[4]);
    }
  }
  return string;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
