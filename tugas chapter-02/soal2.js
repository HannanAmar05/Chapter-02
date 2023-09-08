function checkTypeNumber(givenNumber){
    if(typeof givenNumber === 'number'){
        if (givenNumber % 2 === 0){
           return "GENAP"
        }
        else if (givenNumber % 2 === 1 ){
            return "GANJIL"
        }
    }
    else if (givenNumber === undefined){
        return "Error : bro where is the parameter"
    }

    else{
        return "Error : Invalid data type"
    }
    
   
}

console.log(checkTypeNumber(11))