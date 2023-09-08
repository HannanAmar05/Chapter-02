const getAngkaTerbesarKedua = (personName) =>{
    if(personName === undefined || personName === null){
        return "Data Tidak Ditemukan"
    }
    else if(!Array.isArray(personName)){
        return "Error : Data must be an array"
    }
    else if(personName.length<2){
        return "Error : Array data must be longer than 2"
    }
    const myArray = [...new Set(personName)].sort((a,b) => b - a)
    const SecondNumber = myArray[1]

    return SecondNumber
}


console.log(getAngkaTerbesarKedua([9,4,7,7,4,3,2,2,8]))