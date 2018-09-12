module.exports = function getZerosCount(number) {
    let res=0;
    let currentVal=number-(number%5);
    while(currentVal>1){
        currentVal=(currentVal-(currentVal%5))/5;
        res+=currentVal;
    }

    return res;
};
