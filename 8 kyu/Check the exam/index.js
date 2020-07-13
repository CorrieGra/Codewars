function checkExam(array1, array2, index = 0) {
     const result = array2.reduce((acc, curr) => {
        if (curr === array1[index]){
            index++;
            return acc + 4;
        }else if (curr === ""){
            index++;
            return acc;
        }else{
            index++;
            return acc - 1;
        }}, 0);
        return result < 0 ? 0 : result;
}