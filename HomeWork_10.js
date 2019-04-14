const sum = (...params) =>{
    if (!params.length) {
    return 0;}
    params.reduce = (prev, next) => { 
    return params.reduce = (prev, next) => { return prev + next; };
};


//Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
const rectangle = 
{width:5,
height:5, 
getSquare: function(){console.log(this.width * this.height)}};

rectangle.getSquare()


// Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice: function(){console.log(this.price)},
    getPriceWithDiscount: function(){console.log(this.price - parseInt(this.discount)/100*this.price)}
};
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5


// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
let object = {
    height:0,
    inc: function(){this.height =  this.height+1}
}

object.height = 10;
object.inc(); // придумать свое название для метода
console.log(object.height); // 11;

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”. Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {this.value = this.value *2; return this},
    plusOne: function () {this.value = this.value +1; return this},
    minusOne: function () {this.value = this.value -1; return this},
}
numerator.double().plusOne().plusOne().minusOne();
console.log(numerator.value) // 3


// Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)


const products = {
    name:"apples",
    countity:14,
    price:"2$",
    total:function(){console.log(this.countity * parseInt(this.price))}
}
products.total();


// Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

const products = {
    name:"apples",
    countity:14,
    price:"2$",
    total:function(){console.log(this.countity * parseInt(this.price))}
}

const laptop = {
    name:"samsung",
    countity:3,
    price:"790$",
}
products.total.call(laptop);

// Даны объект и функция: Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
let sizes = 
{width: 5, 
height: 10};
getSquare = function () {return this.width * this.height};

let result = getSquare.call(sizes);
console.log(result)


// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

 
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
let test = getElementHeight(); // undefined
console.log(test)