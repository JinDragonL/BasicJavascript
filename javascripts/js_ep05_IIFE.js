//Immediately-Invoked Function = IIFE

//const number = 600;

function getTotal() {
    console.log('total');
}



const funcTemp = (function() {

    //console.log('This is for testing');

    const number = 100;


    function getTotal() {
        return number * 2;
    }

    //console.log(getTotal());

    return {
        getTotalNumber: getTotal,
        getName: function() {
            return "Robot"
        },
        number
    }

})();



//console.log(nubmer);
console.log(funcTemp.getTotalNumber());
console.log(funcTemp.getName());
console.log(funcTemp.number);
