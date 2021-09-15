// Desafio 10
function techList(array, name) {
  if (array === null || array.length === 0) {
    return 'Vazio!';
  } else {
    array.sort();
    for (let i in array) {
      array[i] = { tech: array[i], name: name };
    }
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(array) {
  let formatoTelefone = '(' + array[0] + array[1] + ') ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  let repeat = 0;

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i of array) {
      if (i < 0 || i > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  for (let i of array) {
    for (let j of array) {
      if (i === j) {
        repeat += 1;
        if (repeat >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    repeat = 0;
  }
  return formatoTelefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && Math.abs(lineA > lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let numeros = string.match(/[0-9]/g);
  let total = 0;
  for (let i of numeros) {
    total += parseInt(i);
  }
  if (total === 1){
    return "1 copo de água";
  } else {
    return (total + " copos de água")
  }
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
