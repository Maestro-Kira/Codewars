function duplicateCount(str){
    let duplicateStorage = {};
    let duplicateTotal = 0;

        str
       .toLowerCase()
       .split('')
       .forEach(str=>{
        duplicateStorage[str] = (duplicateStorage[str] || 0) + 1;})

    for (const key in duplicateStorage) {
        if(duplicateStorage[key] > 1) {
            duplicateTotal++;
        }
    }
    return duplicateTotal;
}

console.log(duplicateCount('aA11'));