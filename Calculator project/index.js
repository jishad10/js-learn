//resultfield ta ke koje nicchi
var resultfield=$("#result");

function insertNumber(number){
    var existingNumbers =resultfield.val();
    resultfield.val(existingNumbers+number);//kono number click ko re add korle aager num er sathe add hobe
}

function clearResult(){
    resultfield.val('');
}

function calculate(){
    var result =eval(resultfield.val());//eval er maddome sob kicu calculate kora jai
    resultfield.val(result);
}

function deleteNumber(){
    var presentValue =resultfield.val();
    if(presentValue!=''){
        resultfield.val(presentValue.slice(0,-1)); //0 num index theke -1 back e jabo
    }
}