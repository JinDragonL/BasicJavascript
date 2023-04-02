//checkNumber();

function checkNumber() {  //function declaration
    console.log('normal');
}

const checkNumber1 = function() { //function expression
    return 1;
}

const checkNumber2 = () => 2;


// console.log(checkNumber1());
// console.log(checkNumber2());


const bien2 = 1;

function function1() {  //function declaration
    
    const bien2 = 100;



    function function2() {

        //const bien3 = 300;

        console.log(bien2, 'by function 2');
    }

    function2();

    //console.log(bien3);

    //return bien2;
}

console.log(function1(), 'by function 1');

//scope

//lexical scoping

//closure function


function calculateValue(a) {

    const b = 50;

    return function() {
        return a + b + 100;
    }
}

const parent = calculateValue(30);

console.log(parent());

// prevent to conflict name of variable
// parent function ends, but state of variable is available
// improve how to organize code
