// Type

// string, number, boolean, undefined, null, object, symbol, bigint

const str = 'Robot';

console.log(str);

const number = 100;

const isBool = true;

const undefinedType = undefined;

const empty = null;

const bigNumber = 1000n;

//*******************
const obj = {};

const array = [];


//reference type = {} and primitive type = all type except {}

const str1 = new String('Iam Robot');

console.log(str1);

const number1 = new Number(1000);

console.log(number1);

const bool1 = new Boolean(true);

const obj1 = new Object('object!!!');


//typeof vs instanceof

console.log(typeof str === 'string')


console.log(str instanceof String)


console.log(number1 instanceof Number)


console.log(typeof bigNumber === 'bigint')



