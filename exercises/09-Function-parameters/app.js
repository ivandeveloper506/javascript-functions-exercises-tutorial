// Your code goes here:

function renderPerson(personName,personBirthDate,personEyeColor,personAge,personGender){
    let renderPersonShow = personName + ' is a ' + personAge + ' years old '
    renderPersonShow += personGender + ' born in ' + personBirthDate + ' with ' + personEyeColor + ' eyes.'

    return renderPersonShow;
}


  ///*** Do not edit below this line ****/
  console.log(renderPerson('Bob', '05/22/1983', 'green', 23, 'male'));