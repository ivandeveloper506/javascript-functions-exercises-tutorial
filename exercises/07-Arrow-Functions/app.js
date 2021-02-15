
rapid = (validateText) => {
    return validateText.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, '').toUpperCase();
}

// From this line up Do not change code below
let str = "Otorrinolaringología";
console.log(rapid(str));




// console.log('OTROS EJEMPLOS DE VOCALES EN TEXTO:');
// console.log('Vocales en ' + 'Fonseca');
// console.log(rapid('Fonseca') + '\n');

// console.log('Vocales en ' + 'Otorrinolaringología');
// console.log(rapid('Otorrinolaringología') + '\n');

// console.log('PALABRAS PARTICULARES CON LAS 5 VOCALES:')
// console.log('Vocales en ' + 'Murciélago');
// console.log(rapid('Murciélago') + '\n');

// console.log('Vocales en ' + 'Ayuntamiento');
// console.log(rapid('Ayuntamiento') + '\n');