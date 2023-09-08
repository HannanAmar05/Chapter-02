function changeWord(selectedText,changedText,text){
    let kata = text.replace(selectedText,changedText)
    console.log(kata)
}
const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'


changeWord('mencintai','membenci',kalimat1)
changeWord('bromo','semeru',kalimat2)

  