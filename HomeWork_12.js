//Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):



class Component{
    constructor(tagName){
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
}

const comp = new Component('span');
console.log(comp)


//Реализовать конструктор и методы в ES6 синтаксисе:
class Component{
    constructor(tagName){
        this.tagName = tagName || 'div';
        this.node = document.createElement(tagName);
    }
    setText(text){
        this.node.textContent = text;
    }
}
const comp = new Component('span');
comp.setText('test')