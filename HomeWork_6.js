
//Зная структуру html, с помощью изученных методов получить (в консоль):
//head
console.log(document.head)

//body
console.log(document.body)

//Все дочерние элементы body 
console.log(document.body.childNodes)

//первый div и все его дочерние узлы а) вывести все дочерние узлы в консоль
console.log(document.body.firstElementChild.childNodes)

//вывести в консоль все дочерние узлы, кроме первого и последнего
let firstE = document.body.firstElementChild.children;

for(let i=1; i<document.body.firstElementChild.children.length-1; i++){
    console.log(firstE[i]);}


//1

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));
function isParent(parent, child){
    console.log(parent.contains(child))
};

//Получить список всех ссылок, которые не находятся внутри списка ul

var allA = document.querySelectorAll('a');
allA = Array.prototype.slice.call(allA); // Make array from NodeList
let filterA = allA.filter(function(a){
    if (a.closest('ul') == null){
        return a
    }
})
console.log(filterA)

//Найти элемент, который находится перед и после списка ul

let beforeUl = document.querySelector('ul').previousElementSibling
let afterUl = document.querySelector('ul').nextElementSibling
console.log(beforeUl, afterUl);

// Посчитать количество элементов li в списке

let count = 0;
for(var i=0; i < document.getElementsByTagName('ul').length ; i++ ){
    count += document.getElementsByTagName('ul')[i].getElementsByTagName('li').length
}
console.log(count);


