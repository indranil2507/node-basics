const sum = (num1,num2) =>num1+num2;
const PI =3.14;
class SomeMathobject{
    constructor(){
        console.log('object created'); 
    }

}
module.exports.sum = sum ;
module.exports.PI = PI ;
module.exports.SomeMathobject = SomeMathobject;