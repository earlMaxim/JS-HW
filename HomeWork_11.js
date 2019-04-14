// Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1

function minus(operand1){
    return function(operand2){
        let res = operand1 - operand2;
        console.log(res);
        return res;
    }
}
minus(10)(6)
minus(5)(6);


// Реализовать функцию, которая умножает и умеет запоминать  возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)

function multiplyMaker(operand1){
    let result = operand1;
      return function (operand2){
        result = result*operand2;
        console.log(result);
        return (result)
    }
}
const multiply = multiplyMaker(2);
multiply(2);
multiply(1);
multiply(3);


// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

let someString = (function(){
    let str='';
    function makeString(value){str = value;}
    function showString(){console.log(str);
        return str}
    function getLength(){console.log(str.length);
    return str.length}
    return{
        makeString: makeString,
        showString:showString,
        getLength:getLength
    };

}())
someString.makeString('test');
someString.showString()
someString.getLength()




// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, 
// делить и возводить в степень. Конечное значение округлить до двух знаков после 
// точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100



let calc = (function(){
    let result=0;
    function setStart(variable){
        return result=variable;
    }
    function add(operand){
        return result+=operand;
    }
    function sub(operand){
        return result-=operand;
    }
    function mult(operand){
        return result*=operand;
    }
    function div(operand){
        return result/=operand;
    }
    function pow(operand){
        return (Math.pow(result, operand));
    }
    function showResult(){
        console.log(result.toFixed(2))
    }

    return{
        setStart:setStart,
        add:add,
        sub:sub,
        mult:mult,
        div:div,
        pow:pow,
        showResult:showResult
    };
}())

calc.setStart(5)
calc.add(5)
calc.add(2)
calc.showResult()

// Создать конструктор для производства автомобилей. Конструктор
//  должен принимать марку автомобиля и возраст машины. Конструктор 
//  должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины 
// (год текущий минус возраст машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2014 (2016-2);
// Марка машины всегда должна возвращаться с большой буквы!
var d = new Date();

function Car(name, age){
    this.name = name[0].toUpperCase() + name.slice(1);
    this.age = (d.getFullYear() - age); 
}

var lexus = new Car('lexus', 2);
console.log(lexus)

//Написать конструктор, который умеет элементарно шифровать строки
function Secret (someString){
    this.showOriginal = someString;
    this.reverse = someString.split("").reverse().join("");
}

var test = new Secret('secret');
console.log(test.reverse)

